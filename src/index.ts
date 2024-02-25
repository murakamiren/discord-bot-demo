import { Message } from "discord.js";
import { discordClient } from "./client";
import { addCommand, onInteraction } from "./commands";
import { DISCORD_TOKEN } from "./config/app_env";

// is bot ready
discordClient.once("ready", async () => {
	console.log("bot is ready");
	if (discordClient.user) {
		console.log(discordClient.user.tag);
	}
	await addCommand().catch((e) => console.log(e));
});

discordClient.on("messageCreate", async (message: Message) => {
	if (message.author.bot) return;
	if (message.content === "!time") {
		const date1 = new Date();
		message.channel.send(date1.toLocaleString());
	}
});

discordClient.on("interactionCreate", (interaction) =>
	onInteraction(interaction).catch((err) => console.error(err)),
);

discordClient.login(DISCORD_TOKEN);
