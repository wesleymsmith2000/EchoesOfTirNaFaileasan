# AGENTS.md

## Repository Expectations

- Read `Echoes_of_Tir_Na_Faileasan_PROJECT.md` and this file before architectural work.
- Preserve strict separation between simulation, rendering, input, networking, persistence,
  world direction, and AI GM gateway code.
- Never allow LLM output to directly mutate authoritative game state.
- Treat AI output as untrusted proposed input that must be schema-validated and simulation-validated.
- Keep game mechanics deterministic wherever practical and use seeded RNG for rules.
- Keep game rules independently testable outside browser or server runtime code.
- Prefer small modules over monolithic files.
- Add tests for rules, state transitions, validation, and bug fixes.
- Preserve backward compatibility for saved module schemas where practical.
- Document architectural changes in `docs/`.
- Never commit API keys, access tokens, credentials, or `.env` files.
- Use environment variables for secrets.
- Ask before introducing major production dependencies.
- Before declaring work complete, run formatting where appropriate, TypeScript checks, tests, and linting.

## Current Commands

- Install dependencies: `npm.cmd install`
- Start local prototype: `npm.cmd run dev`
- Run tests: `npm.cmd run test`
- Run lint: `npm.cmd run lint`
- Type-check and build: `npm.cmd run build`

## Code Review Rules

- Flag any change that lets AI or renderer code mutate authoritative state directly.
- Flag any game rule hidden in UI code, prompt text, or provider-specific AI code.
- Flag any new secret, token, API key, or local credential committed to the repository.
