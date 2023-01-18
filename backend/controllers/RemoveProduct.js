const { Product } = require("../models/UserSchema");
async function RemoveProduct(req, res) {
    const result = await Product.deleteOne({ _id: req.id });
    res.send(result, "Deleted Successfully");
}

module.exports = RemoveProduct;