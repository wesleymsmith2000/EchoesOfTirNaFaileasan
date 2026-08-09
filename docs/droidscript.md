# DroidScript Phone Testing

Yes: the current browser prototype can be tested on Android through DroidScript by wrapping
the Vite static build in a DroidScript `CreateWebView` app.

## Recommended Flow

1. Build the DroidScript bundle on Windows:

   ```powershell
   npm.cmd run build:droidscript
   ```

2. Copy this folder to DroidScript on the phone:

   ```text
   droidscript/EchoesOfTirNaFaileasan/
   ```

3. In DroidScript, the app should contain:

   ```text
   EchoesOfTirNaFaileasan/
   ├── EchoesOfTirNaFaileasan.js
   └── www/
       ├── index.html
       └── assets/
   ```

4. Run `EchoesOfTirNaFaileasan` in DroidScript.

The wrapper loads `www/index.html` into a DroidScript WebView. The Vite build uses relative
asset paths, so the bundle can run from DroidScript local storage without a public server.

## Sync Options

Fastest manual loop:

- Run `npm.cmd run build:droidscript`.
- Use DroidScript's WiFi editor from the phone to upload the updated app folder.

Better source-control loop:

- Push this repository to GitHub.
- Pull or download the repo on the phone or another machine.
- Build on Windows for now; DroidScript should receive the generated `www/` bundle.

Future native loop:

- Keep `packages/core` as the authoritative engine.
- Add a DroidScript-specific input and renderer package later.
- Do not move game rules into DroidScript UI code.

## Notes

- This path is for phone playtesting, not production Android packaging.
- Local device APIs can be added later through a constrained DroidScript bridge.
- The authoritative simulation stays in TypeScript core code.
