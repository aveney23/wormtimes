const commando = require('discord.js-commando')
const discord = require("discord.js")
const randomWords = require("random-words")
module.exports = class ReadyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ratme',
            group: 'fun',
            memberName: 'ratme',
            description: 'This command checks to see if the bot is online and is working properly. If this command fails, nothing else will work.',
            examples: ['ratme']
        });
    }
    run (msg) {
        let embed = new discord.RichEmbed()
        .setAuthor("The Ratting Machine")
        .setColor(0xfc03ca)
        .setTimestamp(Date.now)
        .setTitle("Rating for " + msg.member.name)
        .addField("Rating", Math.round(Math.random() * 10) + "/10")
        .addField("Evaluation", "I think you are a little " + randomWords());
        msg.channel.sendEmbed(embed);
    }
}
