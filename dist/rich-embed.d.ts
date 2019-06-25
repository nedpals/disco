import { RichEmbed, RichEmbedOptions, MessageEmbed } from "discord.js";
export default RichEmbed;
export declare function createElement(type: any, props?: object | MessageEmbed | RichEmbedOptions, ...children: any[]): {
    type: any;
    props: object | MessageEmbed | RichEmbedOptions;
    children: any[];
};
export declare function render(element: any): any;
