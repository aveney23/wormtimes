const commando = require("discord.js-commando")
<<<<<<< HEAD
const path = require('path');
const token = require('./token')
const client = new commando.CommandoClient({
  commandPrefix: '!',
  owner: '202098742013198336'
});
=======
const client = new commando.CommandoClient();
>>>>>>> e3dc4323612a5e24bb6b580ff3be8945c2c40a07
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
<<<<<<< HEAD
  client.login(token.token);
=======
  client.on('message', msg => {
    if (msg.content === 'yee') {   //original responses
      msg.reply('haw');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'yeet') {   //original responses
      msg.reply('yoted');
    }
  });
  
  client.login('NjM2OTcxMDkyMzY3Mzc2NDE0.XbHXpg.Gv2kopVwBdTF9kNtyEvZ_m8wvKA'); 
>>>>>>> e3dc4323612a5e24bb6b580ff3be8945c2c40a07
