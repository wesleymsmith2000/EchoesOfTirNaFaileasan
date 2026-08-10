# Echoes of Tir Na Faileasan

A tiny TypeScript foundation for **The Veil Remembers: Echoes of Tir Na Faileasan**.

This first slice keeps the rules engine deterministic and separate from input, transport,
view models, and rendering. The AI Game Master is intentionally not implemented yet.

## Quick Start

```powershell
npm.cmd run setup
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

## Mobile And Codespaces Development

GitHub is the canonical sync point for this project. The laptop is useful for local
hardware, GPU, DroidScript, and device testing, but normal repository work can happen from
GitHub Codespaces through VS Code Web.

### Open In Codespaces

1. Open the GitHub repository in a browser:
   `https://github.com/wesleymsmith2000/EchoesOfTirNaFaileasan`.
2. Choose **Code** -> **Codespaces** -> **Create codespace on main**, or resume an
   existing codespace.
3. Wait for the devcontainer setup to finish. It runs `npm ci` automatically.
4. In the VS Code Web terminal, run:

   ```bash
   npm run dev:codespaces
   ```

5. Open the forwarded port `5173` when VS Code prompts.

### Develop From Android

From an Android phone or tablet, use GitHub Codespaces / VS Code Web for reviewing code,
issuing Codex tasks, inspecting diffs, running tests, making small edits, and committing or
pushing changes. Large manual editing is still more comfortable on a keyboard, but the
cloud environment no longer depends on the laptop staying awake.

Useful Codespaces commands:

```bash
npm run setup
npm run dev:codespaces
npm run test
npm run lint
npm run format
npm run build
```

### Continue Locally

On the laptop, sync from GitHub before continuing:

```bash
git pull
```

After local work:

```bash
git add .
git commit -m "Describe the change"
git push
```

The Codespace can then continue from the updated GitHub state.

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
