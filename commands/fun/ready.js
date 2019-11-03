// This command checks to see if the bot is online and is working properly. If this command fails, nothing else will work.
const commando = require("discord.js-commando");
module.exports = class ReadyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "ready",
            group: "fun",
            memberName: "ready",
            description: "This command checks to see if the bot is online and is working properly. If this command fails, nothing else will work.",
            examples: ["ready"]
        });
    }
    run (msg) {
        msg.reply("I'm alive, alert, awake, and enthusiastic.");
    }
};
