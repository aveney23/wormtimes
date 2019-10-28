const commando = require("discord.js-commando")
const client = new commando.CommandoClient();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.login(token.token);
