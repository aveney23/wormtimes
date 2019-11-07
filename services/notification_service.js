const Discord = require("discord.js");
module.exports = {
    sendNotification(user, application, title, description, reason) {
        let embed = new Discord.RichEmbed
        .setAuthor(application)
        .setTitle(title)
        .setDescription(description)
        .setFooter("You received this notification because" + reason);
        user.sendEmbed(embed);
    }
}