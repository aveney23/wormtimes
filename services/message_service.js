module.exports = {
    analMess(message) {
        if (message.content.includes("im a mod") || message.content.includes("i'm a mod")) {
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                message.reply("no you're not");
            }
            
        }
    }
};