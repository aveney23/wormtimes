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
        let text = ["Absolutely","My Sources Say Yes","Signs Point to Yes","why are you asking me?"
        ,"The voices say no", "cannot predict now", "Don't Count on it", "Yes, Definitely", "You may rely on it",
        "Ask again later", "My reply is no"
    ]
        let text = text[Math.round(Math.random() * images.length)]
        var embed= new Discord.RichEmbed()
        .setColor(any)
        .setTitle(text);
        .setImage("https://www.vermontcountrystore.com/ccstore/v1/images/?source=/file/v436715391556442924/products/51327.main.png&height=500&width=500&quality=0.88");
        msg.channel.sendEmbed(embed);
        
    }} 