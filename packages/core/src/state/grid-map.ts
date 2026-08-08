import type { GridMap, Position } from "./types";

export function positionKey(position: Position): string {
  return `${position.x},${position.y}`;
}

export function createGridMap(width: number, height: number, wallPositions: Position[]): GridMap {
  return {
    width,
    height,
    walls: new Set(wallPositions.map(positionKey))
  };
}

export function isInsideMap(map: GridMap, position: Position): boolean {
  return position.x >= 0 && position.y >= 0 && position.x < map.width && position.y < map.height;
}

export function isWall(map: GridMap, position: Position): boolean {
  return map.walls.has(positionKey(position));
}

export function canOccupy(map: GridMap, position: Position): boolean {
  return isInsideMap(map, position) && !isWall(map, position);
}
