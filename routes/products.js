const express = require("express");
const Joi = require("joi");
const router = express.Router();
var _ = require('underscore');
const mongoose = require('mongoose');
const app =  express();

mongoose.connect('mongodb+srv://harshityadav:JxsV3y4V7mWl8g1I@cluster0.s9trpdc.mongodb.net/ProductsDB')
    .then(()=>console.log("Connected @ Products.js"))
    .catch(err => console.log("DataBase Connection failed",err));

const productsSchema = new mongoose.Schema({
    name:{ type: String, required: true, lowercase: true },
    quantity:{ type: Number, required: true },
    img:{ type: String, required: true },
    category:{ type: String, required: true, lowercase: true },
});

const Product = mongoose.model("Product", productsSchema);

// Adding a Product
async function addProduct(name,quantity,img,category) {
    const product = new Product({
      name: name,
      quantity: quantity,
      img: img,
      category:category,
    });
    try 
      {
        const result = await product.save();
        console.log("Product Added");
      } 
    catch (error) 
    {
      for (field in error.errors) {
        console.log(error.errors[field].message);
      }
    }
  }
  addProduct("Iphone14",0,"https://sasaSASzxczxcas9asd890a8sd000.png","phones")
  
  // Quering Getting Product/s
  async function getAllProducts() {
    const products = await Product.find();
    return products;
  }
  async function getProductsByName(name) {
    const product = await Product.find({name:name});
    return product;
  }
  async function getProductsByCategory(category) {
    const product = await Product.find({category:category});
    return product;
  }
  async function getProductsById(id) {
    const product = await Product.findById(id);
    return product;
  }
  async function getOutOfStockProducts() {
    const product = await Product.find({ quantity: 0,});
    return product;
  }
  async function getAvailableProducts() {
    const products = await Product.find({quantity:{$gt:0} });
    return products;
  }
  async function deleteProduct(id) {
    const product = await Product.deleteOne({_id:id});
    return product;
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

router.post("/", (req, res) => {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      quantity: Joi.number()
      .integer()
      .min(0)
      .max(1000),
      img: Joi.string().min(3).required(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
      res.status(400).send(result.error.details[0].message);
      return;
    }
    else{
      addProduct(req.body.name,req.body.quantity,req.body.img);
      return;
    }
  });

  module.exports = router;