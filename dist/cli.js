"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kuman_1 = require("kuman");
const run_1 = require("./commands/run");
const cli = kuman_1.CLI();
const app = {
    name: "Disco",
    description: "Create Discord bots fast.",
    version: "0.1.0"
};
cli.on("showVersion", () => console.log(app.version));
cli.on("showHelp", () => console.log(`${app.name}\n${app.description}`));
cli.command("init", () => {
    console.log("Init");
}, {
    arguments: 1,
    description: "Initializes a new Disco project."
});
cli.command("run", run_1.default, {
    arguments: 1,
    description: "Runs the Discord bot."
});
module.exports = cli;
