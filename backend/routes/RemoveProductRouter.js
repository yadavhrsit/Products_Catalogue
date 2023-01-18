const express = require("express");

const RemoveProductRouter = express.Router();

const RemoveProduct = require('../controllers/RemoveProduct');

RemoveProductRouter.put("/remove/:id", RemoveProduct);

module.exports = RemoveProductRouter;