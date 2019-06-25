import { Client, Guild, Message } from "./disco";
type Args = Array<string>;

function Bot(client: Client) {
    this.client = client;
    this.commands = {};
    this.prefix = "/";
    this.env = {
        token: "DISCORD_TOKEN"
    };
}

/**
 * Callback function if the bot is ready.
 */
Bot.prototype.ready = () => {};

/**
 * When the bot joins a guild/server.
 */
Bot.prototype.onJoinedGuild = (guild: Guild) => {};

/**
 * When the bot leaves the guild/server.
 */
Bot.prototype.onLeaveGuild = (guild: Guild) => {};

/**
 * Displays message to the server.
 */
Bot.prototype.render = (message: Message, args: Args) => {};

export default Bot;
export {
    Args,
    Client,
    Guild,
    Message
};