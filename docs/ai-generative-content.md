# AI And Generative Content

This project should treat AI as an interpreter, creative assistant, validator, art
director, and presentation layer. It must not treat AI as authoritative game state.

Source handoff: `openAI_art_processing_handoff.md`.

## Core Rule

```text
Human intent
  -> AI interpretation or content proposal
  -> schema validation
  -> deterministic simulation validation
  -> authoritative state change or rejection
  -> narration, audio, visuals, and creator feedback
```

The deterministic engine owns what is true. AI can translate, propose, narrate, review,
and help author content.

## Service Boundaries

AI capabilities should sit behind replaceable interfaces:

- `LanguageService` for narration, NPC dialogue, and natural-language interpretation.
- `VisionService` for reviewing generated or uploaded images.
- `ImageGenerationService` for portraits, concept art, and module artwork.
- `ModerationService` for safety checks.
- `EmbeddingService` for memory retrieval, module search, and style/lore lookup.
- `SpeechService` for transcription and text-to-speech.
- `AssetGenerationService` for provider-neutral 3D or procedural asset specifications.

Provider code belongs behind these interfaces. Game rules, state transitions, module
truths, and validation logic must not depend on a specific AI provider or model.

## Runtime Text And Voice

Voice and text are input/output adapters over the same action layer:

```text
speech or typed input
  -> natural-language command
  -> structured action proposal
  -> GameEngine.processAction()
  -> structured result
  -> transcript, speech, sound, and visual presentation
```

Text-only play must remain fully supported. Speech recognition and text-to-speech improve
access and feel, but they are not separate game modes internally.

## Creator AI

The module builder can eventually act as an AI content compiler:

```text
creator description
  -> draft module resources
  -> deterministic schema and reference validation
  -> safety moderation
  -> lore/style validation
  -> creator preview
  -> saved module
```

Advanced authors should be able to edit the structured files directly. Natural language is
a creation interface, not the only source of truth.

## Art And Asset Specifications

Generated art should be attached to structured specifications rather than treated as
standalone images.

Stable specs should include:

- source entity or module ID
- style sheet ID and version
- generation prompt/specification version
- safety and lore/style review metadata
- generated asset IDs and file references
- provider/model metadata when available

For 3D, the project should prefer provider-neutral `AssetSpecification` records that can
feed procedural systems, Blender scripts, Unity pipelines, or future generation services.

## Safety Versus Universe Validation

Safety moderation and universe validation are separate decisions.

```text
Safety moderation:
  harmful content, rating, policy, publication eligibility

Universe validation:
  lore, visual style, continuity, module constraints, gameplay budgets
```

A concept can be safe but wrong for the world. A concept can match the world but still
fail safety or rating requirements. These results should not be collapsed into one score.

## Persistent Creature Visuals

Creature visuals must be derived from authoritative state:

```text
gameplay history
  -> mutation rules
  -> phenotype state
  -> visual specification
  -> generated or procedural presentation
```

Generated images must never determine combat stats, resistances, abilities, or encounter
budgets. The engine decides those first; visuals explain them.

## MVP Guardrails

Phase 1 should avoid API integration until the local protocol is testable with fake
providers.

Near-term work should prioritize:

- typed natural-language command envelopes
- fake language/narration provider interfaces
- schema-versioned action proposals
- module skeleton schemas
- transcript and audio presentation adapters
- save/load boundaries
- validation tests

Do not add image generation, vision review, marketplace flows, 3D generation, autonomous
world rewriting, or provider-specific runtime logic to the first slice.
