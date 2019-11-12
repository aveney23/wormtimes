const commando = require("discord.js-commando");
const Discord = require("discord.js");
module.exports = class RatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "positive",
            group: "fun",
            memberName: "positive",
            description: "Motivates and gives you a positive quote and picture! ",
            examples: ["!postive"]
        });
    }
    run (msg) {
        let pos = [ "Sometimes later becomes never. Do it now!", "You got this!",
        "I believe in you!", "You can do this!", "Don't give up!"
            
        ];
        let woah = [
            "https://www.pngkey.com/png/detail/195-1953572_two-thumbs-up-animals.png", "https://c80b88bf5f3aa6bc1c86-1aa77e8451996ab1cbb3824570a84d54.ssl.cf1.rackcdn.com/Ginger-Laptop-V4.jpg",
            "https://www.catersnews.com/wp-content/uploads/2018/08/0_CATERS_THUMBS_UP_ORANGUTAN_01.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2014/03/cute-smiling-animals-coverimage.jpg",
            "http://www.catersnews.com/wp-content/uploads/2016/11/Screen-Shot-2016-11-02-at-12.09.24-PM-800x498.png", "https://www.suggestedpost.eu/wp-content/uploads/2016/06/smiling-animals-1.jpeg",
            "https://www.suggestedpost.eu/wp-content/uploads/2016/06/smiling-animals-2.jpg", "https://i.ytimg.com/vi/cYNlJYQI3Uw/maxresdefault.jpg",
        ];
        let  = pos[Math.round(Math.random() * pos.length)];
        let wow = woah[Math.round(Math.random() * woah.length)];
        var embed= new Discord.RichEmbed()
        .setTitle(pos);
        setImage(wow);
        msg.channel.sendEmbed(embed);
    }};