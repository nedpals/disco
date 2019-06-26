import * as path from "path";
import * as dotenv from "dotenv";
import { Client } from "discord.js";

export default ({ args }) => {
    const botFile = require(path.resolve(process.cwd(), args[0]));
    const env: dotenv.DotenvConfigOutput = dotenv.config();
    const client: Client = new Client();

    // Searches for the main disco file.
    const bot = new botFile(client);
    
    // Checks .env file.

    if (env.error) {
        throw env.error;
    }

    console.log("Bot is starting...")

    client
        .on("ready", () => bot.ready(client))
        .on("guildCreate", bot.onJoinedGuild)
        .on("guildDelete", bot.onLeaveGuild)
        .on("message", (message) => {
            const botCommands = Object.keys(bot.commands);
            const args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();

            // Returns if author is a bot.
            if (message.author.bot) return;

            // Ignore if message does not include a specific prefix.
            if (message.content.indexOf(bot.prefix) !== 0) return;

            if (botCommands.length === 0) {
                bot.message(message);
            } else {
                bot.commands[botCommands.find(c => c === command)](message, args);
            }
        });

    // Runs the discord file.
    client.login(process.env[bot.env.token]);

    process.on("SIGINT", () => {
        console.log("Bot has shut down.");
        process.exit(0);
    });
}