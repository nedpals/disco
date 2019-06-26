import { Client, Guild, Message } from "discord.js";

type Args = Array<string>;

interface EnvFieldOptions {
    token: string
}

/**
 * @constructor
 * @param client Discord client.
 */
class Bot {
    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Bot's client.
     */
    client: Client;

    /**
     * Prefix used to activate the bot.
     */
    prefix: string = "+";

    /**
     * Environemnt options.
     */
    env: EnvFieldOptions = {
        token: "DISCORD_TOKEN"
    }
    
    /**
     * Callback function if the bot is ready.
     */
    ready() {};

    /**
     * When the bot joins a guild/server.
     */
    onJoinedGuild(guild: Guild) {};

    /**
     * When the bot leaves the guild/server.
     */
    onLeaveGuild(guild: Guild) {};

    /**
     * Displays message to the server.
     */
    message(message: Message, args: Args) {};
}

export default Bot;
export {
    Args,
    Client,
    Guild,
    Message
};