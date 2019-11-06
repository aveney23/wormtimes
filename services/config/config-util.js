import {GuildMember} from "discord.js";
const jsonfile = require("jsonfile");
module.exports = {
    
    getUserConfig(id, callback) {
    jsonfile.readFileSync(id + ".json", function (err, obj) {
        if (err) {
            console.log(err);
            callback(err);
        }
        return obj;
    });
    },
    writeUserConfig(id, obj) {
        if (obj == 0) {
            jsonfile.writeFileSync(id + ".json", getUserConfig("default", function(err) {}));
        }
        jsonfile.writeFileSync(id + ".json", obj);
    }
};