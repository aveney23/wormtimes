const jsonfile = require("jsonfile");
module.exports = {
    
    getUserConfig(id, callback) {
    jsonfile.readFile(id + ".json", function (err, obj) {
        if (err) {
            console.log(err);
            callback(err);
        }
        callback();
        return obj;
    });
    },
    writeUserConfig(id, obj) {
        if (obj == 0) {
            jsonfile.writeFile(id + ".json", getUserConfig("default", function(err) {}));
        }
        jsonfile.writeFile(id + ".json", obj);
    }
};