import type { GameState, InitialPlayerConfig } from "./types";
import { createGridMap } from "./grid-map";

export function createInitialGameState(players: InitialPlayerConfig[]): GameState {
  return {
    revision: 0,
    map: createGridMap(5, 5, [
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 2, y: 3 }
    ]),
    players: new Map(
      players.map((player) => [
        player.id,
        {
          id: player.id,
          position: { ...player.position },
          facing: player.facing
        }
      ])
    )
  };
}

export function cloneStateWithPlayer(state: GameState, player: InitialPlayerConfig): GameState {
  const players = new Map(state.players);
  players.set(player.id, {
    id: player.id,
    position: { ...player.position },
    facing: player.facing
  });

  return {
    ...state,
    revision: state.revision + 1,
    players
  };
}
