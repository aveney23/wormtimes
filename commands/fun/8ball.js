const commando = require("discord.js-commando");
const Discord = require("discord.js");
module.exports = class RatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "8ball",
            group: "fun",
            memberName: "8ball",
            description: "When you Say 8ball and ask a question it will generate a response or answer",
            examples: ["rat"]
        });
    }
    run (msg) {
        let text = ["Absolutely","My Sources Say Yes","Signs Point to Yes","why are you asking me?"
        ,"The voices say no", "cannot predict now", "Don't Count on it", "Yes, Definitely", "You may rely on it",
        "Ask again later", "My reply is no", "I have no clue man", "I mean, it could happen?", "For Certain ;)", "Yes Sir", "No Sir", "I mean... Sure" 
    ];
        let wow = text[Math.round(Math.random() * text.length)]; // randomizes title possibilities and picks one
        var embed= new Discord.RichEmbed()
        .setTitle(wow)
        .setImage("https://www.vermontcountrystore.com/ccstore/v1/images/?source=/file/v436715391556442924/products/51327.main.png&height=500&width=500&quality=0.88"); //set image
        msg.channel.sendEmbed(embed); //sends funtion
        
    }};