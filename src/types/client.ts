import { Client, Collection } from "discord.js";
import { Command } from "../commands/type";

export interface AppClient extends Client {
	commands: Collection<string, Command>;
}
