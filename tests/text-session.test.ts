import { describe, expect, it } from "vitest";
import { describeActionResult } from "../apps/web-client/src/text-session";
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

describe("text session narration", () => {
  it("describes accepted movement as road narration", () => {
    const engine = createEngine();

    const result = engine.processAction(
      createActionEnvelope("player_01", "MOVE_FORWARD", "SYSTEM", 1)
    );

    expect(describeActionResult(result)).toContain("step north");
  });

  it("describes blocked movement without changing authority", () => {
    const engine = createEngine();
    engine.processAction(createActionEnvelope("player_01", "TURN_RIGHT", "SYSTEM", 1));

    const result = engine.processAction(
      createActionEnvelope("player_01", "MOVE_FORWARD", "SYSTEM", 2)
    );

    expect(result.accepted).toBe(false);
    expect(describeActionResult(result)).toBe(
      "Your foot finds refusal before distance. The way does not open there."
    );
  });
});
