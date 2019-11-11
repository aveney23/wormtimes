const jsonfile = require("jsonfile");
module.exports = {
    
    getUserConfig(id, callback) {
    jsonfile.readFile(id + ".json", function (err, obj) {
        if (err) {
            console.log(err);
            return callback(err);
        }
        return obj;
    });
    },
    writeUserConfig(id, obj) {
        if (obj === 0) {
            jsonfile.writeFile(id + ".json", this.getUserConfig("default"));
        }
        jsonfile.writeFile(id + ".json", obj);
    }
};