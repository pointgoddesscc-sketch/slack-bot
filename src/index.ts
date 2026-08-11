/**
 * OrgSuite Slack Bot
 * Professional bot for Point Goddess CC / PSE Management
 */

import { App, LogLevel } from "@slack/bolt";
import * as dotenv from "dotenv";
import { registerStatusCommand } from "./commands/status";

dotenv.config();

const required = ["SLACK_BOT_TOKEN", "SLACK_SIGNING_SECRET", "SLACK_APP_TOKEN"];
for (const key of required) {
  if (!process.env[key]) {
    console.warn(`Warning: ${key} is not set`);
  }
}

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: process.env.NODE_ENV === "production" ? LogLevel.INFO : LogLevel.DEBUG,
});

// Register modular commands
registerStatusCommand(app);

// Mention handler
app.event("app_mention", async ({ event, say }) => {
  await say({
    text: `Hello <@${event.user}>. OrgSuite Slack Bot is ready.\nTry the slash command: */orgsuite*`,
    thread_ts: event.ts,
  });
});

// Health
(async () => {
  const port = Number(process.env.PORT) || 3000;
  await app.start(port);
  console.log(`OrgSuite Slack Bot running on port ${port}`);
})();
