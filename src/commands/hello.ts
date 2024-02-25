import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "./type";

export const helloCommand: Command = {
	data: new SlashCommandBuilder().setName("hello").setDescription("挨拶"),
	excute: async (interaction: CommandInteraction) => {
		const user = interaction.user;
		await interaction.reply(
			`こんにちは、${user.displayName}!, 調子はどうですか:)`,
		);
	},
};
