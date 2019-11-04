const commando = require("discord.js-commando");
const Discord = require("discord.js");
module.exports = class RatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "fortunecookie",
            group: "fun",
            memberName: "fortunecookie",
<<<<<<< HEAD
            description: "When you type !fortunecookie it will give you a fortune",
            examples: ["you will be missed"]
=======
            description: "Provides a fortune for you. Different fortune every time!",
            examples: ["!fortunecookie"]
>>>>>>> 960c5c439cfa049b2598ac97b78867eadc6849fa
        });
    }
    run (msg) {
        let fortune = [
            
        ]
        let image = fortune[Math.round(Math.random() * fortune.length)];
        var embed= new Discord.RichEmbed()
        .setTitle(image);
        msg.channel.sendEmbed(embed);
        
<<<<<<< HEAD
    }}; 

  
=======
    }}; 
>>>>>>> 960c5c439cfa049b2598ac97b78867eadc6849fa
