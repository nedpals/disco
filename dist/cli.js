"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kuman_1 = require("kuman");
const run_1 = require("./commands/run");
const check_1 = require("./commands/check");
const utils_1 = require("./utils");
const cli = kuman_1.CLI();
const app = {
    name: "Disco",
    description: "Create Discord bots fast.",
    version: utils_1.getAppInfo("version")
};
cli.on("showVersion", () => console.log(app.version));
cli.on("showHelp", () => console.log(`${app.name}\n${app.description}`));
cli.command("run", run_1.default, {
    arguments: 1,
    description: "Runs the Discord bot."
});
cli.command("check", check_1.default, {
    description: "Prints Disco version and system info. Also checks .env file."
});
module.exports = cli;
