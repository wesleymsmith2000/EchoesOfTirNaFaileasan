# Asset Dropbox Workflow

Use `assets/_inbox/` as the project asset dropbox.

Incoming art, reference images, audio, model exports, zip batches, and loose notes should
land there first. Codex can then inspect the files, preserve provenance notes, rename
durable assets, and move accepted items into a stable folder.

The current stable asset folders are:

```text
assets/
  _inbox/
  stylesheet/
```

Keep full-resolution source material in `assets/`. Web-ready optimized copies can be
created later if the browser client needs them.
