import { APIEmbedField, ColorResolvable, EmbedBuilder, User } from "discord.js";

type EmbedArgs = {
	user: User;
	title: string;
	desc: string;
	color?: ColorResolvable;
	fields: APIEmbedField[];
};

export const generateEmbed = (args: EmbedArgs) => {
	const embed = new EmbedBuilder()
		.setTitle(args.title)
		.setColor(args.color ?? null)
		.setAuthor({
			name: args.user.displayName,
			iconURL: args.user.avatarURL() ?? undefined,
		})
		.setDescription(args.desc)
		.addFields(args.fields);
	return embed;
};
