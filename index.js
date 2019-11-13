const commando = require("discord.js-commando")
const client = new commando.CommandoClient();
const path = require('path')
const token = require('./token')
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['fun', 'Fun'],
        ['debug', 'Debug']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));
  client.login(token.token);
