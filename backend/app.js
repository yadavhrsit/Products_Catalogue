const express = require("express");
const app = express();
app.use(express.json());
const mongodb = require("mongoose");
const { default: mongoose } = require("mongoose");

mongoose.set('strictQuery', true);
mongodb.connect("mongodb+srv://harshityadav:JxsV3y4V7mWl8g1I@cluster0.s9trpdc.mongodb.net/newtest", function (err) {
    if (err) {
        console.log("Connection to the database failed");
    } else {
        console.log("Connection to the database successful");
    }
});

const SignupRouter = require("./routes/SignupRouter");
const LoginRouter = require("./routes/LoginRouter");
const GetProductsRouter = require("./routes/GetProductsRouter");
const GetProductsByIdRouter = require("./routes/GetProductsByIdRouter");
const GetProductsByCategoryRouter = require("./routes/GetProductsByCategoryRouter");
const AddProductRouter = require("./routes/AddProductRouter");
const ModifyProductRouter = require("./routes/ModifyProductRouter");
const RemoveProductRouter = require("./routes/RemoveProductRouter");

app.use("/auth", SignupRouter);
app.use("/auth", LoginRouter);
app.use("/products", GetProductsRouter);
app.use("/products", GetProductsByIdRouter);
app.use("/products", GetProductsByCategoryRouter);
app.use("/products", AddProductRouter);
app.use("/products", ModifyProductRouter);
app.use("/products", RemoveProductRouter);

app.listen(5005, () => {
    console.log('server is running');
})