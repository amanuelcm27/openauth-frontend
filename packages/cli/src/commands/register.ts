// packages/cli/src/commands/register.ts

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

export async function registerDeveloper() {
  try {
    const name = await ask("Developer name ( individual or company ): ");
    const email = await ask("Developer email: ");
    const password = await ask("Password: ");

    const res = await post("/developer/register/", {
      name,
      email,
      password,
    });

    console.log("\n✅ Developer registered successfully");
    console.log("🔑 Developer API Key:");
    console.log("⚠️ Warning : Save this Developer API key securely. It will not be shown again. You will need it to create and manage your apps.");
    console.log(res.developer_api_key);
  } catch (err: any) {
    console.error("\n❌ Registration failed");
    console.error(err.message);
  }
}
