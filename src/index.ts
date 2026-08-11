/**
 * OrgSuite Slack Bot
 * Professional starter for Point Goddess CC / PSE Management
 *
 * Features ready to extend:
 * - Slash commands
 * - Event handling
 * - Secure token loading from environment
 */

import { App, LogLevel } from "@slack/bolt";
import * as dotenv from "dotenv";

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: LogLevel.INFO,
});

/**
 * Example slash command: /orgsuite
 * Responds with a professional status message.
 */
app.command("/orgsuite", async ({ command, ack, respond }) => {
  await ack();

  await respond({
    response_type: "ephemeral",
    text: `OrgSuite Slack Bot is online.\nRequested by <@${command.user_id}>.\nWorkspace ready for automation and notifications.`,
  });
});

/**
 * Example message listener (only responds when bot is mentioned)
 */
app.event("app_mention", async ({ event, say }) => {
  await say({
    text: `Hello <@${event.user}>. OrgSuite Slack Bot is ready. Use /orgsuite for status.`,
    thread_ts: event.ts,
  });
});

/**
 * Health / ready log
 */
(async () => {
  const port = process.env.PORT || 3000;
  await app.start(port);
  console.log(`OrgSuite Slack Bot is running on port ${port}`);
})();
