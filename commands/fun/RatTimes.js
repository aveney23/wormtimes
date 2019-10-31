commando = require('discord.js-commando')
const Discord = require('discord.js')
module.exports = class RatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'jazzrat',
            group: 'fun',
            memberName: 'JazzRat',
            description: 'When you Say JazzRat it will show a different piture of rats',
            examples: ['rat']
        });
    }
    run (msg) {
        let images = ["https://cdn1.umg3.net/156/files/2015/04/SAXMOUSE-624x330.jpg","http://i.dailymail.co.uk/i/pix/2009/07/23/article-0-05CFAF22000005DC-479_306x398.jpg", "https://i.pinimg.com/originals/3c/04/33/3c0433cea4c244a2f3e5c0d7f6f96ba6.jpg",
    "http://2.bp.blogspot.com/-cs_IHKeTNQk/TmiaSa_iWWI/AAAAAAAAAAs/IObd0R43TCQ/s1600/rat_playing_music.jpg","https://live.staticflickr.com/5016/5414657512_5037b8804d.jpg", "data:image/jpeg;base64,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", ]
        let image = images[Math.round(Math.random() * images.length)]
        var embed= new Discord.RichEmbed
        .setTitle("I'm a rat doot doot")
        .setImage(image);
        
    }}
