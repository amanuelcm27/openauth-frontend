// packages/cli/src/commands/createApp.ts

import readline from "readline";
import { post } from "../api";

function ask(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

export async function createApp() {
  try {
    const developerApiKey = await ask("Developer API Key: ");
    const appName = await ask("App name: ");

    const res = await post("/developer/create_app/", {
      developer_api_key: developerApiKey,
      app_name: appName,
    });

    console.log("\n✅ App created successfully");
    console.log("🔐 App Secret Key:");
    console.log(res.app_secret_key);

    console.log("\n📌 Save this in your frontend environment:");
    console.log(`OPENAUTH_APP_SECRET=${res.app_secret_key}`);
  } catch (err: any) {
    console.error("\n❌ App creation failed");
    console.error(err.message);
  }
}
