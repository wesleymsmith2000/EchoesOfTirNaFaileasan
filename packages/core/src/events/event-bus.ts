import type { GameEvent } from "./event";

export type EventListener = (event: GameEvent) => void;

export class EventBus {
  private readonly listeners = new Set<EventListener>();
  private readonly eventLog: GameEvent[] = [];

  publish(event: GameEvent): void {
    this.eventLog.push(event);
    for (const listener of this.listeners) {
      listener(event);
    }
  }

  subscribe(listener: EventListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  events(): readonly GameEvent[] {
    return this.eventLog;
  }
}
