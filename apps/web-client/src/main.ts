import {
  createActionEnvelope,
  createInitialGameState,
  GameEngine,
  LocalActionTransport,
  buildPlayerViewModel,
  type ActionType
} from "../../../packages/core/src";
import "./styles.css";

const actorId = "player_01";
let sequence = 1;

const engine = new GameEngine(
  createInitialGameState([
    {
      id: actorId,
      position: { x: 1, y: 2 },
      facing: "N"
    }
  ])
);
const transport = new LocalActionTransport(engine);
const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing app root");
}

const appRoot = app;

function dispatch(action: ActionType, source: "KEYBOARD" | "TOUCH"): void {
  transport.dispatch(createActionEnvelope(actorId, action, source, sequence++));
  render();
}

function render(): void {
  const view = buildPlayerViewModel(engine.getState(), actorId);
  const cells = Array.from({ length: view.map.width * view.map.height }, (_, index) => {
    const x = index % view.map.width;
    const y = Math.floor(index / view.map.width);
    const key = `${x},${y}`;
    const isPlayer = view.position.x === x && view.position.y === y;
    const isWall = view.map.walls.includes(key);

    return `<div class="cell ${isWall ? "wall" : ""} ${isPlayer ? "player" : ""}">
      ${isPlayer ? view.facing : ""}
    </div>`;
  }).join("");

  appRoot.innerHTML = `
    <section class="shell">
      <div class="status">
        <h1>Echoes of Tir Na Faileasan</h1>
        <p>Revision ${view.revision} | ${view.actorId} | (${view.position.x}, ${view.position.y}) ${view.facing}</p>
      </div>
      <div class="board" style="--cols: ${view.map.width}">${cells}</div>
      <div class="controls">
        <button data-action="TURN_LEFT" aria-label="Turn left">↶</button>
        <button data-action="MOVE_FORWARD" aria-label="Move forward">↑</button>
        <button data-action="TURN_RIGHT" aria-label="Turn right">↷</button>
        <button data-action="MOVE_BACKWARD" aria-label="Move backward">↓</button>
      </div>
    </section>
  `;

  appRoot.querySelectorAll<HTMLButtonElement>("button[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      dispatch(button.dataset.action as ActionType, "TOUCH");
    });
  });
}

document.addEventListener("keydown", (event) => {
  const keymap: Record<string, ActionType> = {
    ArrowUp: "MOVE_FORWARD",
    ArrowDown: "MOVE_BACKWARD",
    ArrowLeft: "TURN_LEFT",
    ArrowRight: "TURN_RIGHT",
    w: "MOVE_FORWARD",
    s: "MOVE_BACKWARD",
    a: "TURN_LEFT",
    d: "TURN_RIGHT"
  };

  const action = keymap[event.key];
  if (action) {
    event.preventDefault();
    dispatch(action, "KEYBOARD");
  }
});

render();
