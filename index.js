const commando = require("discord.js-commando")
const path = require('path');
const client = new commando.CommandoClient({
  commandPrefix: '!',
  owner: '202098742013198336'
});
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
  // client.on('message', msg => {
    // if (msg.content === 'yee') {   //original responses
      // msg.reply('haw');
    // }
  // });
  
  client.login('NjM2OTcxMDkyMzY3Mzc2NDE0.XbMqmg.xLc2BNI08sHU33A6PJuU934q7eo');