import type { ActionEnvelope } from "../actions/action";
import type { Position } from "../state/types";

export type GameEventType =
  | "STATE_CHANGED"
  | "ACTION_REJECTED"
  | "PLAYER_MOVED"
  | "PLAYER_TURNED";

export interface GameEvent {
  id: number;
  revision: number;
  type: GameEventType;
  actorId: string;
  action: ActionEnvelope;
  payload: Record<string, unknown>;
}

export interface MovementPayload extends Record<string, unknown> {
  from: Position;
  to: Position;
}
