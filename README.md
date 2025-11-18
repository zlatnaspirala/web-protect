🛡️ web-protect
👤 Author: Nikola Lukić (zlatnaspirala@gmail.com
) — 2025
💼 Currently looking for a job
🔒 About the Project

web-protect helps safeguard your web application by detecting runtime debugger activity and optionally redirecting or blocking users who attempt to tamper with the page.

It is useful for:

🕹️ Multiplayer gameplay protection

🛑 Preventing cheating or runtime manipulation

🔐 Sensitive / security-critical pages

⚠️ Disclaimer

This project is designed to protect web content by detecting active debugging tools and redirecting the user.

Use it at your own responsibility.

The intention is purely protective — not to harm, disrupt, or interfere with any legitimate user activity.

Please use ethically and in compliance with applicable laws.

📦 API Definition
protect( <disableDebugger>, <disableConsoleLogs>, <onVisibilityChangeCallback> )

Note: console.error always work for now.

Parameters:

disableDebugger — boolean
Enable or disable debugger-detection logic.

disableConsoleLogs — boolean
Turns off console logging to make debugging harder.

onVisibilityChangeCallback — function
Custom handler for browser tab visibility changes.

🧪 Usage Example
import { protect } from "protect";

protect(true, true, () => {
  if (document.visibilityState === "visible") {
    if (hiddenAt !== null) {
      const now = Date.now();
      const hiddenDuration = (now - hiddenAt) / 1000;

      if (parseFloat(hiddenDuration.toFixed(2)) > 1) {
        console.log(`🟢⚠️ Tab was hidden for ${hiddenDuration.toFixed(2)} sec.`);
        document.title = document.title.replace("🟢", "🟡");
      }

      hiddenAt = null;
    } else {
      console.log("🟢 Tab is visible — first activation.");
    }
  } else {
    hiddenAt = Date.now();
  }
});