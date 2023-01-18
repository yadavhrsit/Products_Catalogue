const { Product } = require("../models/UserSchema");

async function GetProductsById(req, res) {
    var id = req.params.id;
    await Product.find({ _id: `${id}` }, function (err, result) {
        if (err) {
            res.status(404).send("No Products found for the given ID");
        } else {
            res.send(result);
        }
    });
}

module.exports = GetProductsById;