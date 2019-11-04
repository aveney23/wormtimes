const commando = require("discord.js-commando");
const Discord = require("discord.js");
module.exports = class RatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "alert",
            group: "fun",
            memberName: "alert",
            description: "When you Say 8ball and ask a question it will generate a response or answer",
            examples: ["rat"]
        });
    }
    run (msg) {

          
        function myfuntion() {
            alert("Rats are almighty and should be worshipped at all times");
          }
          
          function rat() {
            alert("You are correct");
          }
           
          function wrong() {
            alert("You are a fool");
          }
    }};