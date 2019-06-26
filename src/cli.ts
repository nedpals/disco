import { CLI } from "kuman";
import runCommand from "./commands/run";
import checkCommand from "./commands/check";
import { getAppInfo } from "./utils";

const cli = CLI();
const app = {
    name: "Disco",
    description: "Create Discord bots fast.",
    version: getAppInfo("version")
};

cli.on("showVersion", checkCommand);
cli.on("showHelp", () => console.log(`${app.name}\n${app.description}`));

cli.command("run", runCommand, {
    arguments: 1,
    description: "Runs the Discord bot."
});

module.exports = cli;