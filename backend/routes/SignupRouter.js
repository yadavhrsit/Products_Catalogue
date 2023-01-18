const express = require("express");

const SignupRouter = express.Router();

const RegisterUser = require('../controllers/RegisterUser');

SignupRouter.post("/signup", RegisterUser);

module.exports = SignupRouter;