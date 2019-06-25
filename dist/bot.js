"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const disco_1 = require("./disco");
exports.Client = disco_1.Client;
exports.Guild = disco_1.Guild;
exports.Message = disco_1.Message;
function Bot() {
    this.commands = {};
    this.prefix = "/";
    this.env = {
        token: "DISCORD_TOKEN"
    };
}
/**
 * Callback function if the bot is ready.
 */
Bot.prototype.ready = (client) => { };
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
Bot.prototype.render = (message, args) => { };
exports.default = Bot;
