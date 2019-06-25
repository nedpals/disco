import { RichEmbed, RichEmbedOptions, MessageEmbed } from "discord.js";
import { reactify } from "./utils";

export default RichEmbed;

export function createElement(type, props = {} as RichEmbedOptions | MessageEmbed | object, ...children) {
    let element = { type, props, children };

    if (children.length === 0) delete element.children;

    return element;
}

export function render(element) {
    let embed: RichEmbed;

    if (typeof element !== "function") return element;

    if (element.type === "embed") {
        embed = new RichEmbed(element.props);
    } else {
        throw new Error("Parent element must be 'embed' element first.");
    }

    element.children.forEach(child => renderChild(child, embed));

    console.log("hello");
}

function renderChild(element, embed: RichEmbed) {
    if (["field", "blank-field", "blankField"].includes(element.type)) {
        embed[`add${reactify(element.type)}`](element.props);
    } else {
        embed[`set${reactify(element.type)}`](element.props);
    }
}