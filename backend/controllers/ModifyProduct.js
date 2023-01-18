const { Product } = require("../models/UserSchema");
async function ModifyProduct(req, res) {
    let name = req.body.name;
    let totalQuantity = req.body.totalQuantity;
    let category = req.body.category;
    let price = req.body.price;
    const result = await Product.updateOne(
        { _id: req.params[id] },
        {
            $set: {
                name: name,
                totalQuantity: totalQuantity,
                category: category,
                price: price
            },
        }
    );
    res.send(result);
}
module.exports = ModifyProduct;