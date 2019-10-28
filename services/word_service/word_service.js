 const defaul = ["so", "guys", "we", "did", "it"]
module.exports = {
    getRandomDefaultWord: function() {
        return defaul[Math.random() * 5]
    }
}