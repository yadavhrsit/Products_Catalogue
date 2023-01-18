const express = require("express");

const GetProductsByCategoryRouter = express.Router();

const GetProductsByCategory = require('../controllers/GetProductsByCategory');

GetProductsByCategoryRouter.get("/category/:category", GetProductsByCategory);

module.exports = GetProductsByCategoryRouter;