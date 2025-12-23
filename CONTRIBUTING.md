
# Contributing to OpenAuth Frontend

Thank you for your interest in contributing to **OpenAuth Frontend** 
This repository contains the **developer-facing tools** that communicate with the OpenAuth backend.

We welcome contributions that improve reliability, developer experience, security, and extensibility.

---

## 📦 Repository Scope

This repository contains **three packages**:

```text
packages/
 ├── cli/   # @openauthdev/cli
 ├── sdk/   # @openauthdev/sdk
 └── ui/    # @openauthdev/ui
```

Each package serves a distinct role:

| Package | Purpose                                   |
| ------- | ----------------------------------------- |
| **CLI** | One-time developer setup & app management |
| **SDK** | Programmatic MFA interaction              |
| **UI**  | Optional React Native MFA screens         |

Contributions should respect this separation.

---

## 🤝 Ways to Contribute

You can contribute by:

* Fixing bugs
* Improving documentation
* Enhancing developer ergonomics
* Adding new MFA helpers
* Improving UI accessibility or UX
* Improving error handling
* Adding tests
* Proposing architectural improvements

If unsure whether something fits, open an issue first.

---

## 🧠 Core Design Principles

All contributions should follow these principles:

1. **Backend is the source of truth**
2. **Frontend never stores secrets permanently**
3. **SDKs stay framework-agnostic**
4. **UI components are optional, composable, and replaceable**
5. **No user authentication logic lives here**

---

## 🧩 Package-Specific Contribution Guidelines

### 🖥️ CLI (`@openauthdev/cli`)

The CLI is responsible for:

* Developer registration
* App creation
* Secure key generation
* One-time setup workflows

#### Guidelines

* Commands must be **explicit and predictable**
* Avoid breaking changes to CLI commands
* Never store secrets
* Favor interactive prompts over flags
* Errors must be human-readable

**Do not:**

* Cache secrets
* Store credentials locally
* Embed backend business logic

---

### 🔧 SDK (`@openauthdev/sdk`)

The SDK is the **core programmatic interface** developers use.

#### Guidelines

* Keep functions small and explicit
* Avoid framework-specific code
* Return predictable responses
* Throw meaningful errors
* Do not silently fail

Each SDK function must:

* Accept `externalUserId`
* Accept `appSecret`
* Communicate only with OpenAuth backend

**Do not:**

* Manage users
* Persist data
* Assume frontend environment specifics

---

### 🎨 UI (`@openauthdev/ui`)

The UI package contains **optional React Native MFA screens**.

#### Guidelines

* Screens must be reusable
* Logic should rely on the SDK
* UI should be unopinionated
* Styling should be overridable
* Navigation must be caller-controlled

**Do not:**

* Enforce navigation patterns
* Hardcode secrets
* Assume Expo vs bare React Native

UI components are **reference implementations**, not constraints.

---

## 🧪 Testing Requirements

All non-trivial changes must include tests.

* SDK → unit tests for API behavior
* CLI → command execution tests (where feasible)
* UI → component behavior tests (if applicable)

Before submitting a PR:

```bash
npm test
```

---

## ⚙️ Local Development Setup

### Requirements

* **Node.js v20+**
* npm or yarn
* Git

---

### Install Dependencies

```bash
git clone https://github.com/amanuelcm27/openauth-frontend.git
cd openauth-frontend
npm install
```

---

### Package Development

You can work on individual packages:

```bash
cd packages/sdk
npm run build
```

or

```bash
cd packages/ui
npm run build
```

---

## 🔑 Environment Variables

Some packages require environment variables during development:

```env
OPENAUTH_APP_SECRET=****
```

> ⚠️ Never commit secrets.
> `.env` files must remain ignored.

---

## 🧾 Commit Guidelines

We follow conventional, readable commits:

```text
feat: add email OTP resend helper
fix: prevent duplicate OTP verification
docs: improve SDK usage examples
```

---

## 🔁 Pull Request Guidelines

When submitting a PR:

* One feature or fix per PR
* Include tests if applicable
* Update docs if behavior changes
* Explain **why**, not just **what**
* Reference related issues

Incomplete or breaking PRs may be closed.

---

## 🔒 Security Policy

* Never log secrets
* Never expose app secrets in UI
* Never weaken MFA guarantees

If you find a security vulnerability:

* **Do not open a public issue**
* Contact the maintainer privately


---

## 📄 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE.md).

---

