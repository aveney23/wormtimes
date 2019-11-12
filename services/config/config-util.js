const jsonfile = require("jsonfile");
module.exports = {
    
    getUserConfig(id) {
    jsonfile.readFile(id + ".json", function (err, obj) {
        if (err) {
            console.log(err);
            return err;
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