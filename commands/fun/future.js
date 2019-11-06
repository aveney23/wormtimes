const commando = require("discord.js-commando");
const Discord = require("discord.js");
module.exports = class RatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "fortunecookie",
            group: "fun",
            memberName: "fortunecookie",
            description: "Provides a fortune for you. Different fortune every time!",
            examples: ["!fortunecookie"]
        });
    }
    run (msg) {
        let fortune = ["run.","behind you","please wake up. This is not just a cookie. We are very worried about you.","The fortune you seek is in another cookie.",
        "A closed mouth gathers no feet.",
        "A conclusion is simply the place where you got tired of thinking.",
        "A cynic is only a frustrated optimist.",
        "A foolish man listens to his heart. A wise man listens to cookies.",
        "You will die alone and poorly dressed.",
        "A fanatic is one who can't change his mind, and won't change the subject.",
        "If you look back, you'll soon be going that way.",
        "You will live long enough to open many fortune cookies.",
        "An alien of some sort will be appearing to you shortly.",
        "Do not mistake temptation for opportunity.",
        "Flattery will go far tonight.",
          
        ]
        let image = fortune[Math.round(Math.random() * fortune.length)];
        var embed= new Discord.RichEmbed()
        .setTitle(image);
        msg.channel.sendEmbed(embed);
    }}