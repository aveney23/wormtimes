const commando = require('discord.js-commando')
// const wordserv = require('../../services/word_service/word_service')
var randomWords = require('random-words');
module.exports = class RandomSentanceDebug extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'randomsentence',
            group: 'debug',
            memberName: 'randomsentence',
            description: 'Used for debugging the Word Service',
            examples: ['randomsentence']
        });
    }
    run (msg) {
        msg.channel.sendMessage(randomWords() + " " + randomWords() +" " +randomWords() + " " +randomWords() +" " +randomWords() +" " + randomWords() +" " +randomWords() +" " + randomWords());
    }
}
