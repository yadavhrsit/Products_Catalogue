const express = require("express");

const ModifyProductRouter = express.Router();

const ModifyProduct = require('../controllers/ModifyProduct');

ModifyProductRouter.put("/modify/:id", ModifyProduct);

module.exports = ModifyProductRouter;