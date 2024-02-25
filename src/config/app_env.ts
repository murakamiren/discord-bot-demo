import dotenv from "dotenv";

dotenv.config();

export const DISCORD_TOKEN = process.env.DISCORD_TOKEN as string;
export const DISCORD_APP_ID = process.env.DISCORD_APP_ID as string;
