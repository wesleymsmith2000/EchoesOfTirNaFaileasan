export const ACTION_TYPES = [
  "MOVE_FORWARD",
  "MOVE_BACKWARD",
  "TURN_LEFT",
  "TURN_RIGHT",
  "INTERACT",
  "CANCEL",
  "ATTACK",
  "DEFEND",
  "USE_ITEM",
  "TALK"
] as const;

export type ActionType = (typeof ACTION_TYPES)[number];

export type ActionSource = "KEYBOARD" | "TOUCH" | "GAMEPAD" | "NETWORK" | "SYSTEM";

export interface ActionEnvelope {
  actorId: string;
  action: ActionType;
  payload: unknown;
  source: ActionSource;
  sequence: number;
}

export function createActionEnvelope(
  actorId: string,
  action: ActionType,
  source: ActionSource,
  sequence: number,
  payload: unknown = null
): ActionEnvelope {
  return {
    actorId,
    action,
    payload,
    source,
    sequence
  };
}
