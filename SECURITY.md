# Security

This repo is a static site (GitHub Pages) — no server-side code, no secrets, no user data at rest here. The order backend (Telegram bot + API + database) lives in a separate, private repository.

## Reporting a vulnerability

If you find a security issue, please report it privately rather than opening a public issue:

- Telegram: [@mmike202](https://t.me/mmike202)
- Email: mike2101759@gmail.com

Please include steps to reproduce and, if possible, a suggested fix. We'll acknowledge reports within 48 hours.

## Scope

In scope: this static site's frontend code (XSS, dependency/supply-chain issues, CSP/header misconfiguration, information disclosure in client-side code).

Out of scope: the order backend and its infrastructure (not in this repository).
