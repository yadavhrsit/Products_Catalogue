const express = require("express");
const router = express.Router();
var _ = require('underscore');
const mongoose = require('mongoose');




  
  // Quering Getting Product/s
  async function getAllProducts() {
    const products = await Product.find();
    return products;
  }
  

router.get("/", async(req, res) => {
  const result = await getAllProducts();
  res.send(result);
});

router.get("/:name", async(req, res) => {
    const productName = req.params.name;
    const result = await getProductsByName(productName);
    res.send(result);
});


module.exports = router;