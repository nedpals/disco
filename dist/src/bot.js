"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.Client = discord_js_1.Client;
exports.Guild = discord_js_1.Guild;
exports.Message = discord_js_1.Message;
/**
 * @constructor
 * @param client Discord client.
 */
class Bot {
    constructor(client) {
        /**
         * Prefix used to activate the bot.
         */
        this.prefix = "+";
        /**
         * Environemnt options.
         */
        this.env = {
            token: "DISCORD_TOKEN"
        };
        this.client = client;
    }
    /**
     * Callback function if the bot is ready.
     */
    ready() { }
    ;
    /**
     * When the bot joins a guild/server.
     */
    onJoinedGuild(guild) { }
    ;
    /**
     * When the bot leaves the guild/server.
     */
    onLeaveGuild(guild) { }
    ;
    /**
     * Displays message to the server.
     */
    message(message, args) { }
    ;
}
exports.default = Bot;
