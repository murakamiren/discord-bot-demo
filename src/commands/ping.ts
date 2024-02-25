import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "./type";

export const pingCommand: Command = {
	data: new SlashCommandBuilder().setName("ping").setDescription("return pong"),
	excute: async (interaction: CommandInteraction) => {
		await interaction.reply("pong");
	},
};
