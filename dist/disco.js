"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.Client = discord_js_1.Client;
exports.Guild = discord_js_1.Guild;
exports.Message = discord_js_1.Message;
const bot_1 = require("./bot");
const rich_embed_1 = require("./rich-embed");
module.exports = {
    Bot: bot_1.default,
    Embed: rich_embed_1.default
};
