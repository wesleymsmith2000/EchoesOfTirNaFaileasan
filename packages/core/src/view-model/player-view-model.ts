import type { GameState } from "../state/types";

export interface PlayerViewModel {
  actorId: string;
  revision: number;
  position: {
    x: number;
    y: number;
  };
  facing: string;
  map: {
    width: number;
    height: number;
    walls: string[];
  };
}

export function buildPlayerViewModel(state: GameState, actorId: string): PlayerViewModel {
  const player = state.players.get(actorId);
  if (!player) {
    throw new Error(`Cannot build view model for unknown actor: ${actorId}`);
  }

  return {
    actorId,
    revision: state.revision,
    position: { ...player.position },
    facing: player.facing,
    map: {
      width: state.map.width,
      height: state.map.height,
      walls: [...state.map.walls]
    }
  };
}
