# OpenAuth Frontend

[![npm version](https://img.shields.io/npm/v/@openauth/ui)](https://www.npmjs.com/package/@openauth/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

OpenAuth is a **developer-first authentication toolkit** that provides:

-  **CLI tools** for managing authentication projects and applications  
- **SDK functions** for interacting with the OpenAuth backend  
- Optional **React Native UI components** for MFA flows  

It enables seamless integration of **Multi-Factor Authentication (MFA)** using:
- **TOTP (Authenticator Apps)**
- **Email-based One-Time Passwords (OTP)**

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [CLI Features](#cli-features)
  - [Installation](#cli-installation)
  - [Developer Registration](#cli-authentication)
  - [Creating an Application](#cli-app-creation)
- [SDK Usage](#sdk-usage)
  - [TOTP Functions](#totp-functions)
  - [Email OTP Functions](#email-otp-functions)
- [UI Components (Optional)](#ui-components-optional)
- [Security Notes](#security-notes)
- [License](#license)

---

## Architecture Overview

OpenAuth is designed with **clear separation of concerns**:


- **CLI** → Used once during setup and administration  
- **SDK** → Used programmatically inside applications  
- **UI** → Optional, reusable MFA screens (can be replaced with custom UI)

---

## CLI Features

The **OpenAuth CLI** is the first step for developers integrating OpenAuth MFA.  
It is used to:

- Register a developer account
- Create and manage authentication-enabled applications
- Securely generate keys required by the SDK and frontend

The CLI is typically used **once during setup**, 

---

### CLI Installation

The OpenAuth CLI is distributed via npm.

#### Requirements
- **Node.js v20+**
- **react-native-safe-area-context: ^5.6.2**

#### Install globally

```bash
npm install -g @openauth/cli

```
OpenAuth CLI

Usage:
openauth register
openauth create-app


### cli-authentication

Before creating apps, you must register as a developer.

This creates a Developer Account and issues a Developer API Key.

openauth register


Interactive Prompts

You will be asked for:

Developer name ( individual or company ):
Developer email:
Password:

Output

On success, you will receive:

✅ Confirmation of registration

🔑 Developer API Key


Example:

✅ Developer registered successfully
🔑 Developer API Key:
⚠️ Warning : Save this Developer API key securely. It will not be shown again.
sk_dev_********************************

⚠️ Important
The Developer API Key is shown only once.
You will need it to create and manage apps. Store it securely.

### cli-app-creation

Once registered, you can create an application that will use OpenAuth MFA.

Each application gets its own App Secret Key, which is later used by:

The SDK

Frontend (React Native or custom UI)

Command
openauth create-app


Interactive Prompts
Developer API Key:
App name:


Developer API Key → obtained during registration

App name → any identifier (e.g. Youtube)

Output

On success:

✅ App created successfully
🔐 App Secret Key:
sk_app_********************************

📌 Save this in your frontend environment:
OPENAUTH_APP_SECRET=sk_app_****************************


Environment Configuration

The generated App Secret Key must be exposed to your frontend or backend
(depending on your integration strategy).

Example for React Native (Expo):


EXPO_PUBLIC_OPENAUTH_APP_SECRET=sk_app_********************************


🔐 Security Note
Treat the App Secret Key like a password.
Do not commit it to source control.

CLI Workflow Summary

A typical OpenAuth setup looks like this:

Install the CLI

Register as a developer

Create an application

Save the generated keys

Integrate the SDK and UI components

## SDK Usage

The OpenAuth SDK is used inside your application to programmatically enable and verify Multi-Factor Authentication (MFA) for your users.

It provides first-class support for:

🔐 TOTP (Authenticator Apps)

📧 Email One-Time Passwords (OTP)

The SDK communicates securely with the OpenAuth backend using your App Secret Key.

## SDK Installation

Install the SDK via npm:

npm install @openauth/sdk



























