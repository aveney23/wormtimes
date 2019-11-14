// This command checks to see if the bot is online and is working properly. If this command fails, nothing else will work.
const commando = require("discord.js-commando");

const randomWords = require("random-words");
const discord = require("discord.js");

module.exports = class ReadyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "gtmw",
            group: "fun",
            memberName: "gtmw",
            description: "Can you guess the word I am thinking about?",
            examples: ["gtmw"]
        });
    }

    run (message) {
        var done = false;
        message.channel.sendMessage("let me think of a word");
        let actualNumber = randomWords();
        console.log(actualNumber);
        message.channel.sendMessage("I've got it! Try and guess what it is.");
        var collector = new discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        // console.log(collector);
        collector.on("collect", message1 => {
            // This loop checks if the message with the word has been sent, then it analizes it to see if its correct. If its all done, it breaks out of the loop.
            if (done) {
                return;
            }
             else if (message1.content == actualNumber) {
                message1.channel.sendMessage("you got it right! Congratulations! Thanks for playing.");
                done = true;
                collector = null;
                return;
            } else {
                message1.channel.sendMessage("I'm sorry, but that wasn't quite it. The word was actually " + actualNumber + "! Thanks for playing!");
                message1.channel.sendMessage("You guessed " + message1.content);
                done = true;
                collector = null;
                return;
            }
        })

    }
}