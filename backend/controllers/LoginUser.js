const { User } = require("../models/UserSchema");
const { comparePasswords } = require("../utils/PasswordEncryption");

function LoginUser(req, res) {
    const bcrypt = require('bcrypt');
    User.findOne({ email: req.body.email }, function (err, data) {
        if (data) {
            const passwordIsMatched = comparePasswords(req.body.password, data.password)
            if (passwordIsMatched) {
                res.send("Login Successful!! Welcome " + data.username);
            } else {
                res.send("Invalid password:(")
            }
        } else {
            res.send("Invalid credentials");
        }
    });
}

module.exports = LoginUser;