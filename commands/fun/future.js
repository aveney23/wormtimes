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
    };
    run (msg) {
        let fortune = [ "run.", "behind you", "you will die alone and poorly dressed", "The answer you seek is in another cookie", 
        "Please wake up. Your mother and father are very worried about you. This is not just a cookie", "You will get in an argument with a close friend very soon",
        "You will receive a letter from a loved one very soon", "You will live long enough to open another cookie", 
        "Your future is undefined", 
            
        ];
        let image = fortune[Math.round(Math.random() * fortune.length)]; //randomizes the fortunes
        var embed= new Discord.RichEmbed()    
        .setTitle(image);
        msg.channel.sendEmbed(embed); //sends funtion
    }

};