module.exports = {
    analMess: function(message) {
        if (message.content.includes("im a mod")) {
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                message.reply("no your not")
            }
            
        }
    }
}