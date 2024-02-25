import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "./type";
import { generateEmbed } from "./utils/generateEmbed";

export const diceCommand: Command = {
	data: new SlashCommandBuilder()
		.setName("dice")
		.setDescription("ダイズを振る"),
	excute: async (interaction: CommandInteraction) => {
		const user = interaction.user;
		const result = Math.floor(Math.random() * (6 + 1 - 1)) + 1;
		const embed = generateEmbed({
			user: user,
			title: `${user.displayName}さんがダイズを振りました！`,
			desc: "ダイズタイム",
			fields: [{ name: "結果発表", value: `${result}` }],
		});
		await interaction.reply({ embeds: [embed] });
	},
};
