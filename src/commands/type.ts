import {
	ChatInputCommandInteraction,
	CommandInteraction,
	SlashCommandBuilder,
} from "discord.js";

export type Command = {
	data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
	excute: (interaction: CommandInteraction) => Promise<void>;
};
