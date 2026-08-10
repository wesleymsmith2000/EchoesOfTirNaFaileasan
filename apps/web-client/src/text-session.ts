import type { ProcessActionResult } from "../../../packages/core/src";

export type TranscriptSpeaker = "road" | "system";

export interface TranscriptEntry {
  id: string;
  speaker: TranscriptSpeaker;
  text: string;
}

export const openingTranscript: TranscriptEntry[] = [
  {
    id: "opening-1",
    speaker: "road",
    text: "The passage waits in a held breath. Somewhere ahead, the road remembers your weight."
  },
  {
    id: "opening-2",
    speaker: "system",
    text: "Choose a direction, step, or listen. The simulation will decide what changes."
  }
];

export function describeActionResult(result: ProcessActionResult): string {
  const primaryEvent = result.events[0];

  if (!result.accepted) {
    const reason =
      typeof primaryEvent?.payload.reason === "string"
        ? primaryEvent.payload.reason
        : result.reason;

    if (reason === "Blocked movement") {
      return "Your foot finds refusal before distance. The way does not open there.";
    }

    if (reason === "Unknown actor") {
      return "The road hears no such traveler.";
    }

    return `Nothing changes. ${reason ?? "The action was rejected."}`;
  }

  if (primaryEvent?.type === "PLAYER_TURNED") {
    const facing =
      typeof primaryEvent.payload.facing === "string" ? primaryEvent.payload.facing : "unknown";
    return `You turn ${directionName(facing)}. The corridor answers with a new silence.`;
  }

  if (primaryEvent?.type === "PLAYER_MOVED") {
    const facing =
      typeof primaryEvent.payload.facing === "string" ? primaryEvent.payload.facing : "unknown";
    return `You step ${directionName(facing)}. The old stone gives back the sound softly.`;
  }

  return "The road marks the change.";
}

function directionName(direction: string): string {
  const names: Record<string, string> = {
    N: "north",
    E: "east",
    S: "south",
    W: "west"
  };

  return names[direction] ?? direction.toLowerCase();
}
