# Echoes of Tir Na Faileasan

## Project Description & Codex Development Handoff

**Project:** The Veil Remembers --- *Echoes of Tir Na Faileasan*\
**Document purpose:** Bootstrap a Codex-assisted development environment
that can be actively steered from an Android phone while the main
development environment remains on a laptop/dev machine.

------------------------------------------------------------------------

## 1. Project Vision

*Echoes of Tir Na Faileasan* is a multiplayer-capable, retro
first-person, grid-movement RPG inspired structurally by classic dungeon
crawlers such as *Wizardry* and *Eye of the Beholder*, with
tabletop-style roleplaying mechanics influenced by D&D, GURPS, and
Shadowrun.

The distinguishing feature is an AI Game Master embodied diegetically as
**Tir Na Faileasan itself**: an ancient, living threshold intelligence
and road between realities.

The AI GM should not control authoritative game state. Instead:

> **The simulation determines what can happen. Tir Na Faileasan
> determines how the world notices, interprets, responds, and
> remembers.**

The engine should support single-player first, while being architected
from the beginning for multiplayer and potentially MMO-scale persistent
worlds.

------------------------------------------------------------------------

## 2. Core Gameplay Identity

Tir Na Faileasan is a living road rather than ordinary territory.

> **In Tir Na Faileasan, you do not walk the road. The road walks with
> you.**

Gameplay can contain conventional RPG loops---exploration, tactical
combat, equipment, loot, dangerous ecosystems, bosses, character builds,
and dungeon crawling---but these local loops eventually reconnect to a
broader framework of investigation, hospitality, restoration, and
reconciliation.

A typical large-scale arc may resemble:

``` text
Explore
  ↓
Survive / Fight / Evade
  ↓
Prune dangerous corruption
  ↓
Establish safe footholds
  ↓
Investigate the deeper disturbance
  ↓
Understand the underlying relationship
  ↓
Confront / contain / stabilize
  ↓
Reconcile where reconciliation is possible
  ↓
Restore or transform the region
```

Combat is not morally forbidden. Sometimes dangerous growth must be
pruned before anyone can safely investigate its cause.

The larger question is:

> **When the fighting is over, did the players heal what made the
> fighting necessary?**

------------------------------------------------------------------------

## 3. Moral / Narrative Framework

Important principles:

-   Humanity is the visitor in Tir Na Faileasan.
-   The player is not conquering the realm.
-   Hospitality is a real game mechanic.
-   Mercy does not prohibit protection or force when necessary.
-   Reconciliation cannot be coerced.
-   Free choice remains meaningful.
-   Some antagonists may refuse reconciliation.
-   The road may offer opportunities, but does not force souls through
    them.
-   Tir Na Faileasan is not God or Providence.
-   Its unusual causality may allow it to perceive what it understands
    as the creative providence of Providence.
-   The road itself can still be surprised.

Core thematic lines:

> **A gift must be given, not taken.**

> **The thing they tried to steal had been waiting to be given.**

> **Power born from unresolved contradiction becomes catastrophe. Power
> born from reconciled freedom becomes gift.**

------------------------------------------------------------------------

## 4. Lantern System

Lanterns are foundational infrastructure rather than cosmetic equipment.

They originate from the concept of **sitting lights**:

> **Some lights are shy, so listen gently for a while. Some notes are
> shy---let the lantern soften now.**

Lanterns may function as:

-   beacons;
-   waypoints;
-   party rendezvous points;
-   local map anchors;
-   safe-causality pockets;
-   resonance stabilizers;
-   local-law dampeners;
-   anti-panic anchors;
-   safe listening spaces;
-   consent-shaped crossings;
-   road-negotiation markers;
-   small hospitality zones.

They do not conquer an area.

> **They persuade the road to keep a place for mercy.**

The road may accept, reject, move, alter, or answer a lantern placement.

Benevolent native entities may eventually imitate human lanterns,
creating **fairy lanterns** and fairy lights.

> **Fairy lights are what happen when the road learns kindness by
> imitation.**

Fairy-lantern materials may later improve lanterns, Signal Singer foci,
resonance equipment, Sanctuary technology, bridge-repair systems, and
ASRD stabilization.

------------------------------------------------------------------------

## 5. RPG Resolution System --- Initial Direction

Build an original rules engine inspired by the useful characteristics of
GURPS, Shadowrun, and D&D rather than implementing any one ruleset
directly.

Use a universal **d6 dice-pool** model.

Initial concept:

``` text
2–4 → no success
5   → one success
6   → one success + reroll
1   → complication pressure
```

Exploding sixes may continue exploding.

A single `1` should not automatically create a critical failure because
larger skill pools would otherwise paradoxically increase
catastrophic-failure probability.

Success and complication should be independent axes.

Examples:

``` text
Failure
Failure + complication
Success
Success + complication
Exceptional success
```

A useful general formula is:

``` text
Attribute + Skill + Equipment + Circumstance = Dice Pool
```

The deterministic rules engine rolls and evaluates the dice.

The AI GM receives a structured result such as:

``` json
{
  "outcome": "SUCCESS_WITH_COMPLICATION",
  "successes": 5,
  "required": 3,
  "ones": 4,
  "margin": 2
}
```

Tir Na Faileasan may interpret what the complication means, but it does
not secretly change the roll.

------------------------------------------------------------------------

## 6. Technology, Exotic Matter, and "Magic"

Most apparent magic is technologically mediated.

Exotic shards, particles, matter, energy, or other remnants associated
with Tir Na Faileasan are manipulated through specialized devices such
as:

-   wrist conduits;
-   rings;
-   finger-mounted interfaces;
-   gauntlets;
-   resonance tools;
-   portable field equipment.

Conceptually:

``` text
EXOTIC SOURCE
      ↓
INTERFACE DEVICE
      ↓
CONTROL / RESONANCE PATTERN
      ↓
PHYSICAL EFFECT
```

The device is not casting fantasy magic. It is establishing a controlled
interaction with exotic physics.

This creates a shared balancing vocabulary:

-   capability;
-   skill;
-   difficulty;
-   resistance;
-   range;
-   duration;
-   magnitude;
-   cost;
-   preparation;
-   risk;
-   success margin;
-   complication.

------------------------------------------------------------------------

## 7. Signal Singing / Innate Resonance

Some people can interact biologically with exotic phenomena without
requiring an artificial interface.

Examples in the wider TVR setting include Nashoba, Arktus, Akasha, and
especially Hushka.

These individuals may have bodies or nervous systems capable of
incorporating, stabilizing, or resonating with exotic matter/energy.

Innate resonance should impose meaningful costs:

-   concentration;
-   mental fatigue;
-   divided-attention penalties;
-   neurological strain;
-   physical exhaustion;
-   direct exposure to foreign-law phenomena.

A technological conduit acts partly as a firewall.

An innate resonator does not have that protection.

Signal Singer foci are therefore **listening instruments**, not
conventional magic weapons.

> **A Signal Singer focus should make listening safer, not louder.**

Advanced foci may help players:

-   distinguish hostility from panic;
-   detect frightened presences;
-   hear weak or shy signals;
-   stabilize resonance;
-   reduce signal amplitude;
-   call names without overwhelming targets;
-   open temporary safe crossings;
-   communicate with Echoes or foreign-law beings.

------------------------------------------------------------------------

## 8. Flexible Causality and Resonance

Innate resonance need not originate from direct personal exposure.

Tir Na Faileasan has flexible causality.

A person capable of wielding resonance may be connected to someone,
something, lineage, relationship, object, or future event that becomes
exposed to Tir Na Faileasan.

The relationship can sometimes propagate backward through ordinary
causal ordering.

This should not be treated as deterministic "fate."

Tir Na Faileasan understands such phenomena more as **creative
Providence expressed through unusual causal geometry**.

The road may remember a relationship before humans have experienced the
event that explains it.

Mechanically, the game may eventually support unresolved resonances:

``` json
{
  "type": "UNRESOLVED_RESONANCE",
  "subject": "player_472",
  "relationships": [
    "mercy",
    "threshold",
    "unknown_other"
  ],
  "resolution": null
}
```

Later player actions may provide a valid self-consistent resolution
without the game having predetermined the exact event.

------------------------------------------------------------------------

## 9. Software Architecture

Strictly separate:

1.  **Input**
2.  **Authoritative Simulation**
3.  **Rendering / Presentation**
4.  **World Director**
5.  **AI GM Gateway**
6.  **Networking / Transport**
7.  **Persistence / World Memory**

High-level architecture:

``` text
CLIENT / PRESENTATION
DroidScript | Browser | Desktop | Future Unity client
                    ↓
UNIVERSAL INPUT BUS
Keyboard | D-pad | Touch | Gamepad | Network
                    ↓
ACTION TRANSPORT
Local prototype → authoritative network server later
                    ↓
AUTHORITATIVE GAME SIMULATION
Movement | Turns | Combat | Inventory | Rules | RNG
                    ↓
WORLD DIRECTOR
Scenes | Encounters | Factions | Story Threads | Context
                    ↓
AI GM GATEWAY
Structured output only
                    ↓
VALIDATION
                    ↓
WORLD EVENT LOG
                    ↓
PLAYER-SPECIFIC VIEW MODEL
                    ↓
RENDERER
```

------------------------------------------------------------------------

## 10. Universal Action Layer

The game engine must never care whether an action originated from a
keyboard, Android touchscreen, TV remote, controller, or remote player.

Example action vocabulary:

``` text
MOVE_FORWARD
MOVE_BACKWARD
TURN_LEFT
TURN_RIGHT
INTERACT
CANCEL
ATTACK
DEFEND
USE_ITEM
TALK
```

All input should become an **Action Envelope**:

``` json
{
  "actorId": "player_01",
  "action": "MOVE_FORWARD",
  "payload": null,
  "source": "TOUCH",
  "sequence": 18429
}
```

The authoritative state machine processes the envelope.

------------------------------------------------------------------------

## 11. AI GM Boundary

The LLM must **never be authoritative game state**.

The AI may propose reality.

The simulation determines whether that proposal is legal.

Example AI proposal:

``` json
{
  "narration": "Something moves where the corridor should have ended.",
  "proposals": [
    {
      "type": "SPAWN_ENTITY",
      "entity_template": "foreign_predator",
      "location_hint": "ahead_of_party"
    }
  ]
}
```

The engine validates:

-   Is this entity template legal?
-   Is spawning permitted here?
-   Is there an available location?
-   Does this violate encounter budgets?
-   Does this contradict module canon?
-   Has this entity already been spawned?
-   Does the AI currently have permission to introduce an encounter?

Only validated proposals modify state.

Use strict Structured Outputs / JSON Schema for AI communication.

------------------------------------------------------------------------

## 12. World Memory

Maintain an append-only event log.

Example:

``` json
{
  "eventId": 9821,
  "turn": 431,
  "type": "PLAYER_SPARED_ENTITY",
  "actorId": "player_12",
  "targetId": "echo_193",
  "locationId": "threshold_12"
}
```

Higher-level semantic memories may be derived:

``` json
{
  "memory": "MERCY_SHOWN",
  "subjects": [
    "player_12",
    "echo_193",
    "threshold_12"
  ],
  "strength": 0.74,
  "tags": [
    "mercy",
    "fear",
    "refusal_to_harm"
  ]
}
```

The AI should retrieve relevant memories rather than receiving the
entire history every turn.

This becomes the literal machinery behind:

> **The Veil remembers.**

------------------------------------------------------------------------

## 13. Road Memory

Do not reduce Tir Na Faileasan to a single reputation score.

Track behavioral patterns such as:

``` yaml
road_memory:
  hospitality:
    received: 12
    offered: 19

  behaviors:
    listened_before_acting: high
    forced_crossings: low
    honored_promises: high
    protected_frightened_entities: high

  unresolved:
    - broken_promise_at_glass_bridge

  affinities:
    - shy_lights
    - lost_echoes
```

The road should respond contextually to what it remembers.

------------------------------------------------------------------------

## 14. User-Created Modules

User-authored adventures must be a first-class feature.

A module defines truths and constraints rather than requiring enormous
branching dialogue trees.

Suggested structure:

``` text
Module
├── Manifest
├── World Rules
├── Zones
│   ├── Locations
│   ├── Connections
│   └── Environmental Rules
├── Factions
├── Characters
├── Story Threads
├── Encounters
├── Items / Technology / Resonance
├── Ecology
├── Lore
├── Hospitality Rules
├── Lantern Rules
├── Reconciliation Conditions
└── GM Directives
```

The author defines:

-   what is objectively true;
-   what NPCs know;
-   what factions believe;
-   secrets;
-   motives;
-   priorities;
-   relationships;
-   ecological pressures;
-   hard canon;
-   forbidden conclusions;
-   possible resolutions;
-   constraints on AI improvisation.

The AI performs the space between those anchors.

------------------------------------------------------------------------

## 15. Characters and Factions

Characters require more than a personality prompt.

Model:

``` text
IDENTITY
   ↓
DISPOSITION
   ↓
VALUES / PRIORITIES
   ↓
MEMORY / BELIEFS
   ↓
RELATIONSHIPS
   ↓
CURRENT STATE
   ↓
BEHAVIOR
```

Factions should use a similar model and behave like large social actors
with:

-   priorities;
-   resources;
-   fears;
-   pressures;
-   relationships;
-   policies;
-   beliefs;
-   knowledge.

Important epistemic distinction:

``` text
WORLD KNOWS
≠ GM KNOWS
≠ FACTION KNOWS
≠ NPC KNOWS
≠ PLAYER KNOWS
```

This is essential for mysteries.

------------------------------------------------------------------------

## 16. Zones and Ecology

Zones should contain physical and semantic properties.

Potential values:

-   atmosphere;
-   history;
-   factions;
-   hazards;
-   Veil permeability;
-   memory strength;
-   causal flexibility;
-   ecology;
-   road disposition;
-   hospitality rules.

Corrupted-ecology modules should support:

``` text
baseline ecosystem
current ecosystem
corruption pressure
predator pressure
safe-investigation thresholds
recovery thresholds
root disturbance
post-restoration state
```

This allows conventional combat loops to alter actual world conditions
rather than merely award XP.

------------------------------------------------------------------------

## 17. Module GM Freedom

Modules should eventually support several AI-improvisation levels.

### STRICT

AI primarily performs narration and NPCs.

### GUIDED

Canonical truths remain fixed; AI may invent minor encounters and
consequences.

### EMERGENT

Initial world actors and truths remain fixed; AI may develop
relationships and new story threads.

### LIVING WORLD

AI may propose substantial new situations based on simulation, history,
and player behavior while remaining constrained by protected canon.

------------------------------------------------------------------------

## 18. ASRD Long-Term Payoff

The **Anchorage Singularity Resonance Dynamo (ASRD)** is an endgame
technological/thematic payoff.

Exceptionally well-resolved temporal/spatial contradictions can form
self-consistent energy loops.

The original Alpha Centauri rebels sought effectively limitless power
but attempted to extract it from an unreconciled wound.

The later realization is:

> **The thing they tried to steal had been waiting to be given.**

Progression:

``` text
Sitting Light
    ↓
Hospitality Field
    ↓
Safe Crossing
    ↓
Reconciled Threshold
    ↓
Stable Anchorage
    ↓
ASRD
```

The humble lantern therefore teaches the conceptual basis of the
eventual energy revolution.

------------------------------------------------------------------------

# Development Environment

## 19. Primary Development Goal

Create a development workflow where:

-   the main repository lives on the laptop/development machine;
-   Codex can edit and test the repository locally;
-   Git provides version history and rollback;
-   GitHub provides remote repository synchronization and backup;
-   the user can monitor and steer supported Codex sessions from the
    ChatGPT Android app;
-   routine development can continue while away from the laptop.

Current OpenAI Codex mobile functionality supports connecting the
ChatGPT mobile app to supported Codex hosts, allowing remote review,
steering, approvals, and interaction while files and credentials remain
on the host machine.

------------------------------------------------------------------------

## 20. Recommended Initial Stack

### Core engine

Use **TypeScript** for the first implementation.

Reasons:

-   portable to browser/DroidScript-style environments;
-   strong JSON/schema ecosystem;
-   straightforward WebSocket networking;
-   type safety for game-state structures;
-   easy Node.js server migration;
-   shared client/server data models.

Python can later be used for:

-   simulation experiments;
-   balance analysis;
-   procedural-generation research;
-   AI training;
-   gameplay-agent training;
-   PyTorch-based experimental systems.

Do not couple the runtime engine to Python initially.

### Initial tools

Install/configure:

``` text
Git
GitHub
Node.js LTS
npm
TypeScript
VS Code
Codex
ESLint
Prettier
Vitest
```

Potential later additions:

``` text
WebSocket server
SQLite
PostgreSQL
Docker
Python
PyTorch
Unity client
```

------------------------------------------------------------------------

## 21. Repository Layout

Start with a monorepo-style structure:

``` text
echoes-tir-na-faileasan/
│
├── AGENTS.md
├── README.md
├── PROJECT.md
├── package.json
├── tsconfig.json
│
├── docs/
│   ├── architecture.md
│   ├── rules.md
│   ├── module-format.md
│   ├── lore-boundaries.md
│   └── roadmap.md
│
├── packages/
│   ├── core/
│   │   ├── state/
│   │   ├── actions/
│   │   ├── rules/
│   │   ├── dice/
│   │   ├── entities/
│   │   └── events/
│   │
│   ├── world/
│   │   ├── zones/
│   │   ├── factions/
│   │   ├── ecology/
│   │   ├── memory/
│   │   └── modules/
│   │
│   ├── ai-gm/
│   │   ├── schemas/
│   │   ├── context/
│   │   ├── validation/
│   │   └── providers/
│   │
│   ├── networking/
│   │
│   └── renderer/
│
├── apps/
│   ├── web-client/
│   ├── prototype-server/
│   └── module-studio/
│
├── modules/
│   ├── examples/
│   └── official/
│
└── tests/
```

Avoid premature complexity. Empty directories need not all be created
immediately.

------------------------------------------------------------------------

## 22. AGENTS.md

Create an `AGENTS.md` file specifically for Codex.

It should instruct Codex to:

-   preserve strict separation between simulation, rendering, input,
    networking, and AI;
-   never allow LLM output to directly mutate authoritative state;
-   use deterministic seeded RNG for game mechanics;
-   keep game rules independently testable;
-   prefer small modules over monolithic files;
-   add tests for rules and state transitions;
-   preserve backward compatibility for saved module schemas where
    practical;
-   document architectural changes;
-   never commit API keys or credentials;
-   use environment variables for secrets;
-   ask before introducing major dependencies;
-   run formatting, type checks, and tests before declaring work
    complete.

Codex performs best when repository-specific navigation, commands,
conventions, and test expectations are documented in `AGENTS.md`.

------------------------------------------------------------------------

## 23. Git Workflow

Use Git from the first commit.

Recommended branches:

``` text
main
dev
feature/*
experiment/*
```

For early solo development, a simpler model is acceptable:

``` text
main
feature/*
```

Every meaningful Codex task should ideally produce:

1.  code changes;
2.  tests;
3.  a concise summary;
4.  verification results;
5.  a Git commit or reviewable diff.

Do not allow experimental AI-generated changes to accumulate without
checkpoints.

------------------------------------------------------------------------

## 24. Android Remote Steering Workflow

The intended workflow is:

``` text
WINDOWS / DEV MACHINE
─────────────────────
Repository
VS Code
Codex
Node.js
Tests
Git credentials
API credentials
        │
        │ Codex remote connection
        ▼
CHATGPT ANDROID APP
─────────────────────
Review active threads
Read diffs/results
Approve actions
Answer Codex questions
Redirect implementation
Start supported new work
Monitor tests/output
```

The laptop remains the trusted execution environment.

The phone is the supervisory interface.

Files, credentials, local tools, and build dependencies remain on the
development machine.

For this workflow to function reliably, keep the host:

-   powered on;
-   awake;
-   online;
-   signed into the correct ChatGPT account/workspace;
-   running the supported Codex host/app;
-   configured for remote access.

Do not expose development ports directly to the public Internet merely
to control Codex.

------------------------------------------------------------------------

## 25. Remote Testing

During early development, use GitHub and normal web deployment when an
actual playable build must be tested remotely.

Recommended progression:

### Stage 1

Local Node/TypeScript unit tests.

### Stage 2

Local browser prototype.

### Stage 3

Private/static web test deployment.

### Stage 4

Networked authoritative server prototype.

### Stage 5

Android / Fire OS packaging or dedicated clients.

The renderer and input abstractions should allow these clients to change
without rewriting the simulation.

------------------------------------------------------------------------

# Initial Codex Milestones

## Milestone 0 --- Repository Bootstrap

Ask Codex to:

1.  initialize the TypeScript project;
2.  configure Git;
3.  create `AGENTS.md`;
4.  create formatting/linting/test infrastructure;
5.  create basic package layout;
6.  create a minimal README;
7.  verify `npm test`, lint, and TypeScript compilation.

No AI API calls yet.

------------------------------------------------------------------------

## Milestone 1 --- Deterministic Movement Prototype

Implement:

``` text
Input
 ↓
Unified Action
 ↓
ActionTransport
 ↓
GameEngine.processAction()
 ↓
Validation
 ↓
GameState revision N → N+1
 ↓
STATE_CHANGED
 ↓
ViewModel
 ↓
Renderer
```

Requirements:

-   small grid map;
-   player position;
-   N/E/S/W facing;
-   forward/backward movement;
-   left/right rotation;
-   wall collision;
-   deterministic tests;
-   no rendering logic inside GameEngine.

------------------------------------------------------------------------

## Milestone 2 --- Dice Engine

Implement and test:

-   d6 pools;
-   successes on 5--6;
-   exploding sixes;
-   tracking ones;
-   difficulty;
-   margin of success;
-   complication classification;
-   seeded RNG;
-   statistical test utilities.

Do not yet balance the complete RPG.

------------------------------------------------------------------------

## Milestone 3 --- Entity / Turn System

Add:

-   entity registry;
-   players;
-   NPCs;
-   hostile creatures;
-   turn queue;
-   action legality;
-   simple combat;
-   status effects.

------------------------------------------------------------------------

## Milestone 4 --- World Event Log

Every authoritative state change should produce structured events.

Implement:

-   event IDs;
-   timestamps/turns;
-   actors;
-   targets;
-   locations;
-   event payloads;
-   replay/debug capability.

This eventually becomes the foundation of the Memory of the Road.

------------------------------------------------------------------------

## Milestone 5 --- Module Loader

Create the first module schema.

Support:

-   manifest;
-   zones;
-   maps;
-   characters;
-   factions;
-   encounters;
-   truths;
-   secrets;
-   story threads;
-   GM constraints.

Validate modules before loading.

Create one tiny test adventure.

------------------------------------------------------------------------

## Milestone 6 --- Fake GM

Before connecting an LLM, implement a scripted/fake AI GM adapter that
returns the exact same structured protocol the real AI will eventually
use.

This lets the entire architecture be tested without network calls, API
costs, nondeterministic output, or prompt debugging.

------------------------------------------------------------------------

## Milestone 7 --- AI GM

Only after the fake GM works:

-   implement provider abstraction;
-   use strict structured output;
-   build context retrieval;
-   validate every proposal;
-   reject illegal state changes;
-   log AI decisions;
-   keep API credentials server-side.

Tir Na Faileasan should initially handle:

-   narration;
-   NPC dialogue;
-   contextual interpretation;
-   bounded encounter proposals;
-   memory interpretation.

Do not begin with autonomous world rewriting.

------------------------------------------------------------------------

## Milestone 8 --- Lantern Prototype

Build the first distinctive TVR mechanic.

A lantern should:

-   occupy a valid location;
-   create a local stabilization zone;
-   affect encounter/perception parameters;
-   become a world event;
-   be visible to the AI GM;
-   be capable of receiving a road response.

The first prototype response can be deterministic.

Later the AI GM may interpret contextual road reactions.

------------------------------------------------------------------------

# Codex Working Rules

When implementing this project:

1.  Prefer the smallest working vertical slice.
2.  Keep simulation deterministic wherever practical.
3.  Never bury game rules in UI code.
4.  Never bury authoritative rules in prompts.
5.  Treat AI output as untrusted proposed input.
6.  Validate all AI-produced IDs and actions.
7.  Maintain strict schemas.
8.  Keep secrets out of the client.
9.  Write tests before expanding complicated mechanics.
10. Keep the first renderer deliberately simple.
11. Optimize architecture before graphics.
12. Preserve the ability to run without an AI connection.
13. Do not add multiplayer complexity until the single-player state
    machine is clean.
14. Do not hard-code official characters differently from module-created
    characters unless absolutely necessary.
15. Prefer reusable data-driven systems.

------------------------------------------------------------------------

# First Prompt to Give Codex

Use this after the repository and Codex environment are ready:

> Read `PROJECT.md` and `AGENTS.md` completely before making changes.
>
> Bootstrap Milestone 0 and Milestone 1 only.
>
> Create a minimal TypeScript implementation of the deterministic core
> for Echoes of Tir Na Faileasan. Implement a grid map, one player
> entity, cardinal facing, unified action envelopes, an ActionTransport
> abstraction, GameEngine.processAction(), wall collision, state
> revision numbers, a minimal EventBus, a player ViewModel, and a
> deliberately primitive browser renderer.
>
> Keep input, simulation, transport, ViewModel, and rendering in
> separate modules.
>
> Do not add OpenAI API integration, multiplayer networking, inventory,
> combat, persistence, databases, or elaborate graphics yet.
>
> Add automated tests for movement, rotation, collision, invalid actors,
> and state revision behavior.
>
> Before finishing, run TypeScript compilation, tests, and linting. Fix
> failures. Then summarize the architecture, list files changed, report
> verification results, and identify the smallest logical Milestone 2
> task.

------------------------------------------------------------------------

# Near-Term Success Criterion

The first playable build is intentionally tiny.

Success means:

1.  open the prototype;
2.  see a simple first-person or debug representation of a grid;
3.  press/tap forward;
4.  generate a device-agnostic `MOVE_FORWARD` action;
5.  have the deterministic GameEngine validate it;
6.  update authoritative state;
7.  generate a state-change event;
8.  rebuild the player's ViewModel;
9.  render the new view;
10. run the same behavior under automated tests.

If this chain is clean, AI narration, modules, networking, lanterns,
ecology, Signal Singing, persistent memory, and eventually MMO-scale
systems can be layered around it without replacing the foundation.

------------------------------------------------------------------------

## Development North Star

> **The Module defines what is true and what matters.**

> **The simulation determines what happens.**

> **Tir Na Faileasan determines how the world responds and remembers.**

And the player is not learning how to conquer the road.

> **The player is learning how to be welcomed by a road that does not
> belong to them.**
