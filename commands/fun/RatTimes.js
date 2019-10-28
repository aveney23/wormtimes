commando = require('discord.js-commando')
const Discord = require('doscord.js')
module.exports = class RatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'RatTimes',
            group: 'fun',
            memberName: 'RatTimes',
            description: 'When you Say RatTimes it will show a different piture of rats',
            examples: ['rat']
        });
    }
    run (msg) {
        var embed= new Discord.RichEmbed
        .setTitle("I'm a rat doot doot")
        .setImage("https://cdn1.umg3.net/156/files/2015/04/SAXMOUSE-624x330.jpg");
        
    };