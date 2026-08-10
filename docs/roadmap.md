# Roadmap

## Milestone 0

- Repository bootstrap.
- TypeScript, linting, formatting, tests, and build commands.
- Codex-specific `AGENTS.md`.

## Milestone 1

- Deterministic movement prototype.
- Unified action envelopes.
- Authoritative engine with revisioned state.
- Text-first browser renderer with transcript and optional browser speech output.

## Next Small Milestone

Add a fake AI text pipeline before any real OpenAI API integration:

- natural-language command input in the browser client
- a provider-neutral `LanguageService` interface
- a fake parser that maps simple typed phrases to structured action proposals
- schema validation before dispatching actions to the engine
- narration results appended to the transcript
- tests proving invalid AI/provider proposals cannot mutate state

After that bridge is stable, implement the d6 dice-pool engine with seeded RNG, exploding
sixes, independent success and complication axes, and focused statistical utilities.
