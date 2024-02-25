import { Interaction, REST, Routes } from "discord.js";
import { DISCORD_APP_ID, DISCORD_TOKEN } from "../config/app_env";
import { diceCommand } from "./dice";
import { gigachadCommand } from "./gigachad";
import { helloCommand } from "./hello";
import { pingCommand } from "./ping";

const commands = [pingCommand, helloCommand, diceCommand, gigachadCommand];

const commandData = commands.map((d) => d.data);

const rest = new REST({ version: "10" }).setToken(DISCORD_TOKEN);

export const addCommand = async () => {
	await rest.put(Routes.applicationCommands(DISCORD_APP_ID), {
		body: commandData,
	});
};

export const onInteraction = async (interaction: Interaction) => {
	if (!interaction.isCommand()) {
		return;
	}

	const interactCommand = commands.find(
		(ex) => ex.data.name === interaction.commandName,
	);

	if (interactCommand === undefined) return;

	return interactCommand.excute(interaction);
};
