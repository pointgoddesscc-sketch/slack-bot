import { App } from "@slack/bolt";

export function registerStatusCommand(app: App) {
  app.command("/orgsuite", async ({ command, ack, respond }) => {
    await ack();

    await respond({
      response_type: "ephemeral",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "OrgSuite Status",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Bot:* Online\n*User:* <@${command.user_id}>\n*Channel:* <#${command.channel_id}>\n*Workspace:* Ready for automation`,
          },
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: "Point Goddess CC · PSE Management",
            },
          ],
        },
      ],
    });
  });
}
