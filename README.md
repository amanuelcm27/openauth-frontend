# OpenAuth Frontend

[![npm version](https://img.shields.io/npm/v/@openauth/ui)](https://www.npmjs.com/package/@openauth/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

OpenAuth Frontend is a **React Native package** that provides fully-featured **UI components**, **SDK functions**, and optional **MFA CLI tools** for integrating multi-factor authentication (MFA) in mobile applications. It supports both **TOTP** (Time-based One-Time Password) and **Email OTP** authentication flows.

---

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [UI Components](#ui-components)
- [SDK Functions](#sdk-functions)
- [MFA Flow Examples](#mfa-flow-examples)
- [Props Reference](#props-reference)
- [Best Practices](#best-practices)
- [Notes](#notes)
- [License](#license)

---

## Installation

Install via NPM:

```bash
npm install @openauth/ui
## Peer Dependencies

- `react`
- `react-native`
- `react-native-svg`
- `react-native-qrcode-svg`
- `react-native-safe-area-context`

---

## Getting Started

OpenAuth Frontend assumes a backend providing:

- **TOTP endpoints**: setup and verify  
- **Email endpoints**: setup, send, and verify OTP  

Developers can choose:

1. **Use UI components directly** for instant integration.  
2. **Use SDK functions** to build fully custom flows.

---

## UI Components

All UI components are **optional**. You can mix and match with your custom screens or entirely rely on SDK functions.

| Component | Props | Description |
|-----------|-------|-------------|
| `MFAMethodSelectionScreen` | `onSelect: (method: 'totp' | 'email') => void` | Allows user to select MFA method (TOTP or Email OTP) |
| `TotpSetupScreen` | `appSecret: string`, `externalUserId: string`, `onContinue: () => void` | Displays QR code and secret for TOTP setup; calls `onContinue` after setup |
| `TotpVerifyScreen` | `appSecret: string`, `externalUserId: string`, `onVerified: () => void` | Input for 6-digit TOTP code; calls `onVerified` on success |
| `EmailSetupScreen` | `appSecret: string`, `externalUserId: string`, `onContinue: () => void` | Email MFA setup; allows sending OTP |
| `EmailVerifyScreen` | `appSecret: string`, `externalUserId: string`, `onVerified: () => void` | Input for 6-digit email OTP; verifies and calls `onVerified` |
| `VerifiedScreen` | None | Optional success screen after MFA verification |
