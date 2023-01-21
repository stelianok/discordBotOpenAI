import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const DISCORD_TOKEN = process.env["DISCORD_TOKEN"];

const OPENAI_TOKEN = process.env["OPENAI_TOKEN"];

const CLIENT_ID = process.env["CLIENT_ID"];

if (!DISCORD_TOKEN) {
  console.error("No 'discord token' provided in .env file.");
} else if (!OPENAI_TOKEN) {
  console.error("No Todoist token provided");
} else if (!CLIENT_ID) {
  console.error("No Client id token provided");
}

export { DISCORD_TOKEN, OPENAI_TOKEN, CLIENT_ID };