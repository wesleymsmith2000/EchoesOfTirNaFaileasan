import type { ActionEnvelope } from "../actions/action";
import type { GameEngine, ProcessActionResult } from "../engine/game-engine";

export interface ActionTransport {
  dispatch(action: ActionEnvelope): ProcessActionResult;
}

export class LocalActionTransport implements ActionTransport {
  constructor(private readonly engine: GameEngine) {}

  dispatch(action: ActionEnvelope): ProcessActionResult {
    return this.engine.processAction(action);
  }
}
