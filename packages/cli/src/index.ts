#!/usr/bin/env node

import { registerDeveloper } from "./commands/register";
import { createApp } from "./commands/createApp";

const command = process.argv[2];

switch (command) {
  case "register":
    registerDeveloper();
    break;

  case "create-app":
    createApp();
    break;

  default:
    console.log(`
            OpenAuth CLI

            Usage:
            openauth register
            openauth create-app
        `);
}
