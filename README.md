# Echoes of Tir Na Faileasan

A tiny TypeScript foundation for **The Veil Remembers: Echoes of Tir Na Faileasan**.

This first slice keeps the rules engine deterministic and separate from input, transport,
view models, and rendering. The AI Game Master is intentionally not implemented yet.

## Quick Start

```powershell
npm.cmd install
npm.cmd run test
npm.cmd run lint
npm.cmd run build
npm.cmd run dev
```

Open the Vite URL shown by `npm.cmd run dev` to try the primitive browser prototype.
To test from an Android phone on the same Wi-Fi, run `npm.cmd run dev:phone`, find this
machine's LAN IPv4 address, then open `http://<LAN-IP>:5173` on the phone.

For an offline DroidScript copy, run `npm.cmd run build:droidscript` and copy
`droidscript/EchoesOfTirNaFaileasan/` into DroidScript. See `docs/droidscript.md`.

## Current Scope

- Unified action envelopes for movement and rotation.
- Deterministic authoritative `GameEngine.processAction()`.
- Grid map, wall collision, one player, cardinal facing, revision numbers.
- Minimal event bus and player view model.
- Text-first browser renderer with a session transcript, optional browser voice playback,
  keyboard controls, and touch controls.
- Vitest coverage for movement, rotation, collision, invalid actors, and revisions.

## Remote Codex Workflow

Use the ChatGPT Android app's Remote view as the supervisory interface while this Windows
machine remains the trusted execution host. Keep the host awake, online, signed into the
same ChatGPT account/workspace, and running the ChatGPT desktop app with Codex access.

Do not expose local dev ports publicly just to steer Codex. Use GitHub for synchronization
and a real deployment target when a build needs remote playtesting.

## Project Source

The full concept handoff lives in `Echoes_of_Tir_Na_Faileasan_PROJECT.md`.
The AI, art, voice, and module-processing direction is summarized in
`docs/ai-generative-content.md`.
