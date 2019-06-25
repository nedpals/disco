"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const utils_1 = require("./utils");
exports.default = discord_js_1.RichEmbed;
function createElement(type, props = {}, ...children) {
    let element = { type, props, children };
    if (children.length === 0)
        delete element.children;
    return element;
}
exports.createElement = createElement;
function render(element) {
    let embed;
    if (typeof element !== "function")
        return element;
    if (element.type === "embed") {
        embed = new discord_js_1.RichEmbed(element.props);
    }
    else {
        throw new Error("Parent element must be 'embed' element first.");
    }
    element.children.forEach(child => renderChild(child, embed));
    console.log("hello");
}
exports.render = render;
function renderChild(element, embed) {
    if (["field", "blank-field", "blankField"].includes(element.type)) {
        embed[`add${utils_1.reactify(element.type)}`](element.props);
    }
    else {
        embed[`set${utils_1.reactify(element.type)}`](element.props);
    }
}
