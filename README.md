🛡️ web-protect
👤 Author: Nikola Lukić — 2025

📧 zlatnaspirala@gmail.com

💼 Currently looking for a job

🔍 What is web-protect?

web-protect is a lightweight security helper designed to make runtime debugging and tampering more difficult on web pages.

It provides:

🔒 Debugger detection

🚫 Optional console disabling

👁️ Tab visibility tracking

⚠️ Runtime tamper-protection

🕹️ Useful for multiplayer game UIs, sensitive dashboards, or anti-cheat logic

⚠️ Disclaimer

This package is intended solely for protective purposes.

Use it at your own responsibility.

Do not use it to harm, disrupt, or interfere with legitimate users.

Ensure compliance with local laws and platform policies.

📦 Installation
npm install web-protect


or

yarn add web-protect

🔧 API
protect(disableDebugger, disableConsole, onVisibilityChange)
Parameter	Type	Description
disableDebugger	boolean	Enables debugger freeze/detection.
disableConsole	boolean	Disables console functions to make debugging harder.
onVisibilityChange	function	Custom callback when the tab is hidden or shown.
🧪 Usage Example
import { protect } from "web-protect";

let hiddenAt = null;

protect(true, true, () => {
  if (document.visibilityState === "visible") {
    if (hiddenAt !== null) {
      const now = Date.now();
      const hiddenDuration = (now - hiddenAt) / 1000;

      if (hiddenDuration > 1) {
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

🔒 Console Protection

When disableConsole = true, these console functions are silenced:

log, info, warn, debug, trace


This makes runtime debugging significantly harder for attackers.


Debugger freeze/detection logic is also included internally.

❤️ Support

If you find this tool useful, consider starring the repository or sharing feedback.

💌 Contact: zlatnaspirala@gmail.com

🧑‍💻 GitHub: https://github.com/zlatnaspirala