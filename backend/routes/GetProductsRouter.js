const express = require("express");

const GetProductsRouter = express.Router();

const GetProducts = require('../controllers/GetProducts');

GetProductsRouter.get("/products", GetProducts);

module.exports = GetProductsRouter;