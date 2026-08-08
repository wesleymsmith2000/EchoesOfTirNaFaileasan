import type { Direction, Position } from "../state/types";

const DIRECTIONS: Direction[] = ["N", "E", "S", "W"];

export function turnLeft(facing: Direction): Direction {
  const index = DIRECTIONS.indexOf(facing);
  return DIRECTIONS[(index + DIRECTIONS.length - 1) % DIRECTIONS.length] ?? "N";
}

export function turnRight(facing: Direction): Direction {
  const index = DIRECTIONS.indexOf(facing);
  return DIRECTIONS[(index + 1) % DIRECTIONS.length] ?? "N";
}

export function movementDelta(facing: Direction): Position {
  switch (facing) {
    case "N":
      return { x: 0, y: -1 };
    case "E":
      return { x: 1, y: 0 };
    case "S":
      return { x: 0, y: 1 };
    case "W":
      return { x: -1, y: 0 };
  }
}

export function applyDelta(position: Position, delta: Position, multiplier: 1 | -1 = 1): Position {
  return {
    x: position.x + delta.x * multiplier,
    y: position.y + delta.y * multiplier
  };
}
