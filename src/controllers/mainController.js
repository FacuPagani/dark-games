const path = require("path");
//const db = require("../database/models")

let mainController = {
    index: function(req,res) {
        return res.render("index")
    }
}
module.exports = mainController;