# Codex Handoff — Mobile-First Cloud Development Setup

## Goal

Set up a development workflow that lets me work on my projects from an Android phone without requiring my laptop or desktop to remain powered on or remotely accessible.

The intended architecture is:

Android phone / browser
→ GitHub Codespaces / VS Code Web
→ GitHub repository
→ Codex for implementation, refactoring, testing, and repository work

My laptop should become optional rather than required. I want to use it later only when I need local hardware, GPU acceleration, device-specific testing, or heavier workloads.

GitHub should be the source of truth and synchronization layer between all environments.

---

# Desired Workflow

I want to be able to:

1. Open a project from my Android phone.
2. Launch or reconnect to a GitHub Codespace.
3. Use VS Code Web for repository browsing, terminal access, small edits, testing, and reviewing Codex changes.
4. Use Codex to perform most code-heavy implementation work.
5. Commit and push changes to GitHub.
6. Later open the same repository on my laptop and continue from the same state.
7. Push laptop changes back to GitHub so Codex/Codespaces can continue from them.
8. Avoid needing Wake-on-LAN, remote desktop, or an always-running home computer for normal development.

Conceptually:

```text
                GitHub Repository
                       │
          ┌────────────┼─────────────┐
          │            │             │
          ▼            ▼             ▼
      Codex Cloud   Codespace     Local Laptop
          │            │             │
      implementation   │        GPU / hardware /
      refactoring      │        device-specific work
      tests            │
                       ▼
                  VS Code Web
                       │
                       ▼
                  Android Phone
```

GitHub is the canonical state.

No environment should depend on another machine remaining online.

---

# First Objective

Configure the current repository so that it works cleanly inside GitHub Codespaces.

Please inspect the repository first before making assumptions about its language, build system, or dependencies.

Then create or improve the development-container configuration.

Preferred structure:

```text
.devcontainer/
    devcontainer.json
```

Add supporting Dockerfiles or setup scripts only if they are actually useful.

The Codespace should automatically provide the tools needed to work on this repository.

For example, depending on the project:

- Git
- Python
- pip / venv
- Node.js / npm
- project dependencies
- testing tools
- linting / formatting tools
- useful VS Code extensions
- GitHub CLI where appropriate

Do not install unnecessary tooling.

---

# Environment Requirements

The development environment should be reproducible.

A fresh Codespace should require as little manual configuration as practical.

Prefer configuration stored in the repository over undocumented machine-specific setup.

If dependencies exist, use the project's existing dependency-management approach rather than inventing another one.

Examples:

Python:

```text
requirements.txt
pyproject.toml
uv.lock
poetry.lock
```

JavaScript / TypeScript:

```text
package.json
package-lock.json
pnpm-lock.yaml
yarn.lock
```

Use whichever system the project already uses.

---

# Bootstrap Command

I would like a simple way to prepare the project after cloning or rebuilding the environment.

If appropriate, add something like:

```text
scripts/setup.sh
```

or an equivalent cross-platform/bootstrap mechanism.

It should handle things such as:

- installing dependencies
- initializing required local directories
- setting up development configuration
- performing safe first-run setup

It should NOT contain secrets.

---

# Development Commands

Document the important commands for the project.

Ideally there should be obvious commands for:

```text
setup
run
test
lint
format
build
```

Use the project's existing tooling wherever possible.

If these commands are currently inconsistent or complicated, provide lightweight wrappers rather than restructuring the entire project unnecessarily.

---

# README — Mobile / Codespaces Section

Add a concise section to the README explaining the mobile/cloud workflow.

Include:

## Open in Codespaces

How to create or resume a Codespace for this repository.

## Develop from Android

Explain that the project can be accessed through VS Code Web from a phone or tablet.

Mention that mobile use is primarily intended for:

- reviewing code
- issuing Codex tasks
- inspecting diffs
- running tests
- small manual edits
- commits and pushes

Large-scale manual typing on a phone is not expected.

## Continue Locally

Explain the basic synchronization workflow:

```bash
git pull
```

Do local development, then:

```bash
git add .
git commit -m "..."
git push
```

The cloud environment can then continue from the new GitHub state.

---

# Git Workflow

Use a conservative Git workflow.

Do not rewrite existing history.

Prefer feature branches for substantial Codex work.

Suggested pattern:

```text
main
  │
  ├── codex/<feature-name>
  │
  ├── feature/<feature-name>
  │
  └── fix/<issue-name>
```

Do not force-push unless explicitly instructed.

Before making substantial changes:

1. inspect repository status
2. identify current branch
3. inspect relevant project structure
4. understand the existing build/test system

---

# Codex Workflow

I want Codex to function as the primary implementation assistant.

For substantial tasks, use the pattern:

```text
inspect
→ plan
→ implement
→ test
→ inspect diff
→ summarize
```

Avoid making speculative architectural changes unrelated to the requested task.

When changing code:

- preserve existing working behavior unless the task requires changing it
- add tests when practical
- run existing tests
- report failures rather than hiding them
- keep commits logically scoped

For large work, prefer a branch or pull-request style workflow so I can review it easily from my phone.

---

# Secrets and Credentials

Do NOT commit:

- API keys
- GitHub tokens
- OpenAI keys
- SSH private keys
- passwords
- device credentials

Use environment variables or Codespaces secrets where required.

Provide a template such as:

```text
.env.example
```

if the project needs environment variables.

Example:

```text
OPENAI_API_KEY=
OTHER_SERVICE_KEY=
```

The real `.env` should be ignored by Git.

Verify `.gitignore` protects appropriate secret/configuration files.

---

# Hardware-Specific Work

Do not assume the Codespace replaces all local development.

My laptop has an NVIDIA RTX-class GPU and may later be used for:

- PyTorch training
- GPU inference
- large simulations
- heavy builds
- device-specific testing
- Roblox tooling
- Android/device testing
- local graphical tools

Code should therefore remain portable between cloud and local environments wherever practical.

Avoid introducing dependencies that unnecessarily lock the project to Codespaces.

---

# Project Portability

Where reasonable, distinguish between:

```text
core application logic
platform-specific adapters
hardware-accelerated components
UI / rendering
network services
```

This is especially important for my game and simulation projects because some may eventually run across:

- web
- Android
- Fire TV
- desktop
- Roblox
- Unity
- cloud servers

Do NOT prematurely redesign the current repository around all of those targets.

Just avoid choices that unnecessarily make future portability difficult.

---

# Optional Useful Improvements

After the basic Codespaces setup is working, inspect whether any of the following would materially improve the workflow:

- GitHub Actions for automated tests
- lint checks on pull requests
- formatting checks
- dependency caching
- pre-commit hooks
- Makefile / task runner
- devcontainer extensions
- port forwarding configuration
- launch/task configuration for VS Code

Only implement these when they provide clear value.

Do not turn this setup task into a large DevOps project.

---

# Initial Deliverables

Please complete the following first:

1. Inspect the repository.
2. Explain its current development environment.
3. Identify anything that would prevent it from working cleanly in GitHub Codespaces.
4. Add or update `.devcontainer/devcontainer.json`.
5. Add any minimal supporting setup scripts required.
6. Verify dependencies install successfully.
7. Run the project's existing tests or equivalent validation.
8. Add a brief Codespaces/mobile-development section to the README.
9. Verify `.gitignore` protects secrets and machine-specific files.
10. Show me the resulting diff.
11. Summarize exactly how I should launch this project from my Android phone.

Do not make unrelated application changes during this setup phase.

---

# Success Criteria

This setup is successful when I can:

```text
open GitHub on Android
→ open this repository
→ launch/resume Codespace
→ open VS Code Web
→ open terminal
→ install/start automatically or with one documented setup command
→ run project
→ run tests
→ use Codex for changes
→ commit/push
→ later pull the same work onto my laptop
```

without needing the laptop to have remained powered on.

The larger goal is a mobile-first, GitHub-centered development workflow where Codex and cloud development handle ordinary work and my local computer becomes an optional high-performance worker.
