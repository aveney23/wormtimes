commando = require('discord.js-commando')
const Discord = require('discord.js')
module.exports = class RatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rattimes',
            group: 'fun',
            memberName: 'rattimes',
            description: 'When you Say RatTimes it will show a different piture of rats',
            examples: ['rat']
        });
    }
    run (msg) {
        var embed= new Discord.RichEmbed()
        .setAuthor("I'm a rat doot doot")
        .setImage("https://cdn1.umg3.net/156/files/2015/04/SAXMOUSE-624x330.jpg");
        msg.channel.sendEmbed(embed);
    }
}