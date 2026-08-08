export type Direction = "N" | "E" | "S" | "W";

export interface Position {
  x: number;
  y: number;
}

export interface PlayerEntity {
  id: string;
  position: Position;
  facing: Direction;
}

export interface GridMap {
  width: number;
  height: number;
  walls: ReadonlySet<string>;
}

export interface GameState {
  revision: number;
  map: GridMap;
  players: ReadonlyMap<string, PlayerEntity>;
}

export interface InitialPlayerConfig {
  id: string;
  position: Position;
  facing: Direction;
}
