# Architecture

The first implementation is a narrow deterministic movement prototype.

```text
Input
  -> ActionEnvelope
  -> ActionTransport
  -> GameEngine.processAction()
  -> validation
  -> authoritative GameState revision N + 1
  -> GameEvent
  -> PlayerViewModel
  -> renderer
```

The renderer does not own game state. It submits action envelopes and renders view models
derived from the authoritative state.

The AI GM boundary is intentionally absent in this milestone. When added, it must propose
structured changes through a gateway and validator before anything can affect state.
