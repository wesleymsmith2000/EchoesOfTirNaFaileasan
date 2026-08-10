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

The current browser client is text-first: accepted and rejected `ProcessActionResult`
objects are translated into a local session transcript, and optional browser speech
synthesis can read those transcript lines aloud. This narration layer is presentation-only.
It consumes validated simulation results and never mutates authoritative state.

The generative-content architecture is tracked separately in
`docs/ai-generative-content.md`. Its core principle is that AI may interpret human intent,
compile creator input into structured proposals, generate presentation assets, and review
content, but every state-changing proposal must pass schema and simulation validation.

The AI GM boundary is intentionally absent in this milestone. When added, it must propose
structured changes through a gateway and validator before anything can affect state.
