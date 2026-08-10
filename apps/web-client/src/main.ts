import {
  createActionEnvelope,
  createInitialGameState,
  GameEngine,
  LocalActionTransport,
  buildPlayerViewModel,
  type ActionType,
  type ProcessActionResult
} from "../../../packages/core/src";
import { BrowserSpeechNarrator } from "./speech";
import "./styles.css";
import { describeActionResult, openingTranscript, type TranscriptEntry } from "./text-session";

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
const speech = new BrowserSpeechNarrator();
const transcript: TranscriptEntry[] = [...openingTranscript];
const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing app root");
}

const appRoot = app;

function dispatch(action: ActionType, source: "KEYBOARD" | "TOUCH"): void {
  const result = transport.dispatch(createActionEnvelope(actorId, action, source, sequence++));
  recordResult(result);
  render();
}

function recordResult(result: ProcessActionResult): void {
  const latestEvent = result.events[0];
  const entry = {
    id: `event-${latestEvent?.id ?? sequence}`,
    speaker: result.accepted ? "road" : "system",
    text: describeActionResult(result)
  } satisfies TranscriptEntry;

  transcript.push(entry);
  speech.speak(entry.text);
}

function render(): void {
  const view = buildPlayerViewModel(engine.getState(), actorId);
  const cells = Array.from({ length: view.map.width * view.map.height }, (_, index) => {
    const x = index % view.map.width;
    const y = Math.floor(index / view.map.width);
    const key = `${x},${y}`;
    const isPlayer = view.position.x === x && view.position.y === y;
    const isWall = view.map.walls.includes(key);

    return `<div class="cell ${isWall ? "wall" : ""} ${isPlayer ? "player" : ""}" aria-label="${cellLabel(
      isPlayer,
      isWall
    )}">
      ${isPlayer ? view.facing : ""}
    </div>`;
  }).join("");
  const transcriptItems = transcript
    .slice(-8)
    .map(
      (entry) => `
        <article class="transcript-entry ${entry.speaker}">
          <span>${entry.speaker === "road" ? "Tir Na Faileasan" : "System"}</span>
          <p>${entry.text}</p>
        </article>`
    )
    .join("");

  appRoot.innerHTML = `
    <section class="shell">
      <div class="story-panel">
        <div class="status">
          <p class="kicker">Echoes of Tir Na Faileasan</p>
          <h1>The road is listening.</h1>
          <p>Revision ${view.revision} | ${view.actorId} | (${view.position.x}, ${view.position.y}) ${view.facing}</p>
        </div>
        <div class="transcript" aria-live="polite">${transcriptItems}</div>
        <div class="command-row">
          <button data-action="TURN_LEFT" aria-label="Turn left" title="Turn left">&larr;</button>
          <button data-action="MOVE_FORWARD" aria-label="Move forward" title="Move forward">&uarr;</button>
          <button data-action="TURN_RIGHT" aria-label="Turn right" title="Turn right">&rarr;</button>
          <button data-action="MOVE_BACKWARD" aria-label="Move backward" title="Move backward">&darr;</button>
          <button data-audio-toggle aria-pressed="${speech.isEnabled()}" ${speech.isAvailable() ? "" : "disabled"}>
            ${speech.isEnabled() ? "Mute voice" : "Voice"}
          </button>
        </div>
      </div>
      <div class="state-panel">
        <h2>State</h2>
        <div class="board" style="--cols: ${view.map.width}" aria-label="Debug map">${cells}</div>
      </div>
    </section>
  `;

  appRoot.querySelectorAll<HTMLButtonElement>("button[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      dispatch(button.dataset.action as ActionType, "TOUCH");
    });
  });

  appRoot
    .querySelector<HTMLButtonElement>("button[data-audio-toggle]")
    ?.addEventListener("click", () => {
      speech.setEnabled(!speech.isEnabled());
      render();
    });
}

function cellLabel(isPlayer: boolean, isWall: boolean): string {
  if (isPlayer) {
    return "player";
  }

  return isWall ? "wall" : "open floor";
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
