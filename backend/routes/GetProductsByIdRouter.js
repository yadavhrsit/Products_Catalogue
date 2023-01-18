const express = require("express");

const GetProductsByIdRouter = express.Router();

const GetProductsById = require('../controllers/GetProductsById.js');

GetProductsByIdRouter.get("/id/:id", GetProductsById);

module.exports = GetProductsByIdRouter;