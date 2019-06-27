import { Client, Guild, Message } from "discord.js";
declare type Args = Array<string>;
interface EnvFieldOptions {
    token: string;
}
/**
 * @constructor
 * @param client Discord client.
 */
declare class Bot {
    constructor(client: Client);
    /**
     * Bot's client.
     */
    client: Client;
    /**
     * Prefix used to activate the bot.
     */
    prefix: string;
    /**
     * Environemnt options.
     */
    env: EnvFieldOptions;
    /**
     * Callback function if the bot is ready.
     */
    ready(): void;
    /**
     * When the bot joins a guild/server.
     */
    onJoinedGuild(guild: Guild): void;
    /**
     * When the bot leaves the guild/server.
     */
    onLeaveGuild(guild: Guild): void;
    /**
     * Displays message to the server.
     */
    message(message: Message, args: Args): void;
}
export default Bot;
export { Args, Client, Guild, Message };
