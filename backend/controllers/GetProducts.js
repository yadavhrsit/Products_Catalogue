const { Product } = require("../models/UserSchema");

function GetProducts(req, res) {
    Product.find({}, { __v: 0 }, function (err, result) {
        if (err) {
            console.log("No data found");
        } else {
            if (result.length <= 0) {
                res.status(404).send("No Products found in the database");
            } else {
                res.send(result);
            }
        }
    });
}

module.exports = GetProducts;