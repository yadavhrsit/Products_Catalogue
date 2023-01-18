const express = require("express");

const AddProductRouter = express.Router();

const AddProduct = require('../controllers/AddProduct');

AddProductRouter.post("/new", AddProduct);

module.exports = AddProductRouter;