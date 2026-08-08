import { describe, expect, it } from "vitest";
import { createActionEnvelope, createInitialGameState, GameEngine } from "../packages/core/src";

function createEngine(): GameEngine {
  return new GameEngine(
    createInitialGameState([
      {
        id: "player_01",
        position: { x: 1, y: 2 },
        facing: "N"
      }
    ])
  );
}

describe("GameEngine movement", () => {
  it("moves forward relative to facing", () => {
    const engine = createEngine();

    const result = engine.processAction(
      createActionEnvelope("player_01", "MOVE_FORWARD", "SYSTEM", 1)
    );

    const player = result.state.players.get("player_01");
    expect(result.accepted).toBe(true);
    expect(player?.position).toEqual({ x: 1, y: 1 });
    expect(result.state.revision).toBe(1);
  });

  it("moves backward relative to facing", () => {
    const engine = createEngine();

    const result = engine.processAction(
      createActionEnvelope("player_01", "MOVE_BACKWARD", "SYSTEM", 1)
    );

    const player = result.state.players.get("player_01");
    expect(result.accepted).toBe(true);
    expect(player?.position).toEqual({ x: 1, y: 3 });
  });

  it("rotates left and right through cardinal directions", () => {
    const engine = createEngine();

    engine.processAction(createActionEnvelope("player_01", "TURN_LEFT", "SYSTEM", 1));
    let player = engine.getState().players.get("player_01");
    expect(player?.facing).toBe("W");

    engine.processAction(createActionEnvelope("player_01", "TURN_RIGHT", "SYSTEM", 2));
    player = engine.getState().players.get("player_01");
    expect(player?.facing).toBe("N");
  });

  it("rejects wall collisions without increasing state revision", () => {
    const engine = createEngine();

    engine.processAction(createActionEnvelope("player_01", "TURN_RIGHT", "SYSTEM", 1));
    const result = engine.processAction(
      createActionEnvelope("player_01", "MOVE_FORWARD", "SYSTEM", 2)
    );

    const player = result.state.players.get("player_01");
    expect(result.accepted).toBe(false);
    expect(result.reason).toBe("Blocked movement");
    expect(player?.position).toEqual({ x: 1, y: 2 });
    expect(result.state.revision).toBe(1);
  });

  it("rejects invalid actors without increasing state revision", () => {
    const engine = createEngine();

    const result = engine.processAction(
      createActionEnvelope("missing_player", "MOVE_FORWARD", "SYSTEM", 1)
    );

    expect(result.accepted).toBe(false);
    expect(result.reason).toBe("Unknown actor");
    expect(result.state.revision).toBe(0);
  });

  it("records state change events for accepted actions", () => {
    const engine = createEngine();

    const result = engine.processAction(createActionEnvelope("player_01", "TURN_LEFT", "SYSTEM", 1));

    expect(result.events.map((event) => event.type)).toEqual(["PLAYER_TURNED", "STATE_CHANGED"]);
    expect(engine.getEvents()).toHaveLength(2);
  });
});
