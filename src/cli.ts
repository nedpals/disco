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

cli.on("showVersion", () => console.log(app.version));
cli.on("showHelp", () => console.log(`${app.name}\n${app.description}`));

cli.command("run", runCommand, {
    arguments: 1,
    description: "Runs the Discord bot."
});

cli.command("check", checkCommand, {
    description: "Prints Disco version and system info. Also checks .env file."
});

module.exports = cli;