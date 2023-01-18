const Joi = require('joi');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

const Products = new Schema({
    name: Joi.string()
        .min(2)
        .max(30)
        .required(),
    totalQuantity: Joi.number()
        .min(1)
        .max(9999),
    category: Joi.string()
        .min(2)
        .max(30)
        .required(),
    price: Joi.number()
        .min(1)
        .max(999999),
});

const UserModel = mongoose.model('User', Users);
const ProductModel = mongoose.model('Product', Products);
module.exports = { User: UserModel, Product: ProductModel };