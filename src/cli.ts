import { CLI } from "kuman";
import runCommand from "./commands/run"

const cli = CLI();
const app = {
    name: "Disco",
    description: "Create Discord bots fast.",
    version: "1.0.0" 
};

cli.on("showVersion", () => console.log(app.version));

cli.on("showHelp", () => console.log(`${app.name}\n${app.description}`));

cli.command("init", () => {
    console.log("Init");
}, {
    arguments: 1,
    description: "Initializes a new Disco project."
});

cli.command("run", runCommand, {
    arguments: 1,
    description: "Runs the Discord bot."
});

module.exports = cli;