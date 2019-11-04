const commando = require("discord.js-commando");
const Discord = require("discord.js");
module.exports = class RatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "fortunecookie",
            group: "fun",
            memberName: "fortunecookie",
            description: "When you type !fortunecookie it will give you a fortune",
            examples: ["you will be missed"]
        });
    }
    run (msg) {
        let fortune = [
            
        ]
        let image = fortune[Math.round(Math.random() * fortune.length)];
        var embed= new Discord.RichEmbed()
        .setTitle(image);
        msg.channel.sendEmbed(embed);
        
    }}; 

  