import type { ActionEnvelope } from "../actions/action";
import type { GameEvent } from "../events/event";
import { EventBus } from "../events/event-bus";
import { canOccupy } from "../state/grid-map";
import type { GameState, PlayerEntity } from "../state/types";
import { applyDelta, movementDelta, turnLeft, turnRight } from "./movement";

export interface ProcessActionResult {
  accepted: boolean;
  state: GameState;
  events: GameEvent[];
  reason?: string;
}

export class GameEngine {
  private state: GameState;
  private nextEventId = 1;

  constructor(initialState: GameState, private readonly eventBus = new EventBus()) {
    this.state = initialState;
  }

  getState(): GameState {
    return this.state;
  }

  getEvents(): readonly GameEvent[] {
    return this.eventBus.events();
  }

  processAction(action: ActionEnvelope): ProcessActionResult {
    const player = this.state.players.get(action.actorId);
    if (!player) {
      return this.reject(action, "Unknown actor");
    }

    switch (action.action) {
      case "TURN_LEFT":
        return this.updatePlayer(action, player, {
          ...player,
          facing: turnLeft(player.facing)
        });
      case "TURN_RIGHT":
        return this.updatePlayer(action, player, {
          ...player,
          facing: turnRight(player.facing)
        });
      case "MOVE_FORWARD":
        return this.movePlayer(action, player, 1);
      case "MOVE_BACKWARD":
        return this.movePlayer(action, player, -1);
      default:
        return this.reject(action, `Unsupported action: ${action.action}`);
    }
  }

  private movePlayer(
    action: ActionEnvelope,
    player: PlayerEntity,
    multiplier: 1 | -1
  ): ProcessActionResult {
    const nextPosition = applyDelta(player.position, movementDelta(player.facing), multiplier);
    if (!canOccupy(this.state.map, nextPosition)) {
      return this.reject(action, "Blocked movement");
    }

    return this.updatePlayer(action, player, {
      ...player,
      position: nextPosition
    });
  }

  private updatePlayer(
    action: ActionEnvelope,
    previousPlayer: PlayerEntity,
    nextPlayer: PlayerEntity
  ): ProcessActionResult {
    const players = new Map(this.state.players);
    players.set(nextPlayer.id, nextPlayer);

    this.state = {
      ...this.state,
      revision: this.state.revision + 1,
      players
    };

    const eventType =
      previousPlayer.facing !== nextPlayer.facing ? "PLAYER_TURNED" : "PLAYER_MOVED";

    const events = [
      this.createEvent(action, eventType, {
        from: previousPlayer.position,
        to: nextPlayer.position,
        facing: nextPlayer.facing
      }),
      this.createEvent(action, "STATE_CHANGED", {
        revision: this.state.revision
      })
    ];

    for (const event of events) {
      this.eventBus.publish(event);
    }

    return {
      accepted: true,
      state: this.state,
      events
    };
  }

  private reject(action: ActionEnvelope, reason: string): ProcessActionResult {
    const event = this.createEvent(action, "ACTION_REJECTED", { reason });
    this.eventBus.publish(event);
    return {
      accepted: false,
      state: this.state,
      events: [event],
      reason
    };
  }

  private createEvent(
    action: ActionEnvelope,
    type: GameEvent["type"],
    payload: Record<string, unknown>
  ): GameEvent {
    return {
      id: this.nextEventId++,
      revision: this.state.revision,
      type,
      actorId: action.actorId,
      action,
      payload
    };
  }
}
