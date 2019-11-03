const commando = require("discord.js-commando");
const client = new commando.CommandoClient();
const path = require("path");
// const token = require("./token")
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
client.on("message", () => {
  
});
  client.registry
    .registerDefaultTypes()
    .registerGroups([
        ["fun", "Fun"],
        ["debug", "Debug"]
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, "commands"));

    // If you are cloning this repository for yourself, replace token.token with your token.

  client.login(process.env.token);
