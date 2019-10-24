const commando = require("discord.js-commando")
const client = new commando.CommandoClient();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content === 'yee') {   //original responses
      msg.reply('haw');
    }
  });
  
  client.login('NjM2OTcxMDkyMzY3Mzc2NDE0.XbHXpg.Gv2kopVwBdTF9kNtyEvZ_m8wvKA');