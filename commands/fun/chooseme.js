commando = require('discord.js-commando')
const Discord = require('discord.js')
module.exports = class RatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'jazzrat',
            group: 'fun',
            memberName: 'jazzrat',
            description: 'When you Say jazzrat it will show a different piture of rats',
            examples: ['rat']
        });
    }
    run (msg) {
        let images = []
        let image = images[Math.round(Math.random() * images.length)]
        var embed= new Discord.RichEmbed()
        .setColor(any)
        .setImage(image);
        msg.channel.sendEmbed(embed);
        
    }} 