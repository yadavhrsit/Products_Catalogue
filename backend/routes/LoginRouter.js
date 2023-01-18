const express = require('express');

const LoginRouter = express.Router();

const LoginUser = require('../controllers/LoginUser');

LoginRouter.post("/login", LoginUser);

module.exports = LoginRouter;