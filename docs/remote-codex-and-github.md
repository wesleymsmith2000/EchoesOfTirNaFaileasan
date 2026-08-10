# Remote Codex and GitHub Setup

## Mobile-First Cloud Setup

For normal development that should not depend on the laptop remaining awake, use GitHub as
the canonical project state and GitHub Codespaces as the cloud development host.

Android workflow:

- Open the GitHub repository from Android.
- Start or resume a Codespace on `main` or on a feature branch.
- Use VS Code Web for terminal access, Codex tasks, diffs, tests, commits, and pushes.
- Run `npm run dev:codespaces` and open the forwarded Vite port when prompted.

Codespaces uses `.devcontainer/devcontainer.json`, which installs dependencies with
`npm ci` after the container is created.

## Current Host Setup

- Windows project path:
  `C:\Users\wesle\OneDrive\Documents\The Veil Remembers\EchoesOfTirNaFaileasan`
- Local Git branch: `main`
- Project commands use `npm.cmd` because PowerShell blocks the `npm.ps1` shim.
- GitHub CLI (`gh`) is not currently installed on this machine.

## Android Remote Codex Checklist

Use the ChatGPT Android app as the control plane. Keep code, credentials, Git auth, Node,
and tests on the Windows host.

Host requirements:

- ChatGPT desktop app for Windows is installed and up to date.
- The desktop app is signed into the same ChatGPT account and workspace as Android.
- The host is awake, online, and allowed to run Codex.
- This repository is open from the local Git root.
- Do not expose local development ports publicly just to control Codex.

Phone workflow:

- Open ChatGPT on Android.
- Use Remote to connect to this Windows host.
- Select this repository.
- Review diffs, steer tasks, approve commands, and monitor tests from the phone.

## GitHub Repository Setup

Once GitHub CLI is installed and authenticated, create and push the remote:

```powershell
gh auth login
gh repo create echoes-of-tir-na-faileasan --private --source . --remote origin --push
```

If the repository already exists on GitHub:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/echoes-of-tir-na-faileasan.git
git push -u origin main
```

After the first push, Codex remote sessions can use GitHub as the shared synchronization and
backup point while still running tests and edits on the trusted Windows host.
