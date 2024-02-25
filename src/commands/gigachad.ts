import {
	ApplicationCommandType,
	ChatInputCommandInteraction,
	SlashCommandBuilder,
} from "discord.js";
import { Command } from "./type";

export const gigachadCommand: Command = {
	data: new SlashCommandBuilder()
		.setName("gigachad")
		.setDescription("gigachad")
		.addBooleanOption((option) =>
			option.setName("video").setDescription("gigachad").setRequired(false),
		),
	excute: async (interaction) => {
		if (interaction.commandType === ApplicationCommandType.ChatInput) {
			// optionある場合
			const chatInteraction = interaction as ChatInputCommandInteraction;
			const isVideo = chatInteraction.options.getBoolean("video");
			if (isVideo) await interaction.reply("https://youtu.be/EZEfN5z8Mlg");

			await interaction.reply(
				"https://static.wikia.nocookie.net/joke-battles/images/d/df/Gigachad.png/revision/latest?cb=20230812064835",
			);
		} else {
			await interaction.reply(
				"https://static.wikia.nocookie.net/joke-battles/images/d/df/Gigachad.png/revision/latest?cb=20230812064835",
			);
		}
	},
};
