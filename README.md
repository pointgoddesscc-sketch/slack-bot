# OrgSuite Slack Bot

Professional Slack Bot for **Point Goddess CC / PSE Management**.

Built with Slack Bolt + TypeScript. Ready for local development and deployment.

---

## Features included

- `/orgsuite` slash command (status response)
- `app_mention` event handler
- Socket Mode support
- Secure environment variable loading
- Clean TypeScript structure

---

## Clone into Working Copy

```
https://github.com/pointgoddesscc-sketch/slack-bot.git
```

---

## Quick start (local)

1. Clone the repository
2. Copy environment template:
   ```bash
   cp .env.example .env
   ```
3. Fill in your Slack credentials in `.env`:
   - `SLACK_BOT_TOKEN`
   - `SLACK_SIGNING_SECRET`
   - `SLACK_APP_TOKEN`
4. Install dependencies:
   ```bash
   npm install
   ```
5. Run in development:
   ```bash
   npm run dev
   ```

---

## Slack App setup (one-time)

1. Go to [https://api.slack.com/apps](https://api.slack.com/apps)
2. Create a new app → From scratch
3. Enable **Socket Mode**
4. Add a Bot Token Scope: `chat:write`, `commands`, `app_mentions:read`
5. Create a slash command: `/orgsuite`
6. Install the app to your workspace
7. Copy the tokens into your `.env` file

---

## Project structure

```
slack-bot/
├── src/
│   └── index.ts          # Main bot logic
├── .env.example          # Safe template (no secrets)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## Security rules

- Never commit real tokens or a real `.env` file
- Use only environment variables or secret managers
- Keep the bot in a private Slack workspace while testing

---

## Next extensions (optional)

- Connect to Linear / GitHub webhooks
- Send deployment notifications from Vercel
- Add more slash commands for OrgSuite status
- Deploy to a small always-on host or Cloudflare Workers

---

**Account:** pointgoddesscc@gmail.com  
**GitHub:** pointgoddesscc-sketch  
**License:** Apache-2.0

This bot is production-ready as a professional starter.
