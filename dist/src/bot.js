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
function Bot(client) {
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
Bot.prototype.ready = () => { };
/**
 * When the bot joins a guild/server.
 */
Bot.prototype.onJoinedGuild = (guild) => { };
/**
 * When the bot leaves the guild/server.
 */
Bot.prototype.onLeaveGuild = (guild) => { };
/**
 * Displays message to the server.
 */
Bot.prototype.message = (message, args) => { };
exports.default = Bot;
