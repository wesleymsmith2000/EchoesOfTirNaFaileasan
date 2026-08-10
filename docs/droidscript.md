# DroidScript Phone Testing

Yes: the current browser prototype can be tested on Android through DroidScript by wrapping
the Vite static build in a DroidScript `CreateWebView` app.

## Fastest Live Progress Check

Use this when the Windows machine and Android phone are on the same Wi-Fi network and you
want to see each saved project change quickly.

1. Start the LAN dev server:

   ```powershell
   npm.cmd run dev:phone
   ```

2. Find the Windows machine's LAN IPv4 address:

   ```powershell
   ipconfig
   ```

   Look for the `IPv4 Address` under the active `Wi-Fi` adapter.

3. Open this URL from Chrome on Android:

   ```text
   http://<LAN-IP>:5173
   ```

Vite will usually hot-reload the phone browser as files change. If Windows asks about
firewall access for Node.js, allow private-network access.

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

- Run `npm.cmd run dev:phone` and test in the phone browser while the laptop stays online.
- Run `npm.cmd run build:droidscript`.
- Use DroidScript's WiFi editor from the phone to upload the updated app folder.

Better source-control loop:

- Push this repository to GitHub.
- Continue steering Codex from the ChatGPT Android app while this Windows machine remains
  the execution host.
- Build on Windows for now; DroidScript should receive the generated `www/` bundle.

Future native loop:

- Keep `packages/core` as the authoritative engine.
- Add a DroidScript-specific input and renderer package later.
- Do not move game rules into DroidScript UI code.

## Notes

- This path is for phone playtesting, not production Android packaging.
- Local device APIs can be added later through a constrained DroidScript bridge.
- The authoritative simulation stays in TypeScript core code.
