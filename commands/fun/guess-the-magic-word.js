// This command checks to see if the bot is online and is working properly. If this command fails, nothing else will work.
const commando = require('discord.js-commando')
const randomwords = require('')
module.exports = class ReadyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'gtmw',
            group: 'fun',
            memberName: 'gtmw',
            description: 'Can you guess the word I am thinking about?',
            examples: ['gtmw']
        });
    }
    run (msg) {
        
    }
}
