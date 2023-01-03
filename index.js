const products = require("./routes/products");
const home = require("./routes/home");
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use(express.json());

app.use("/",home);
app.use("/api/read/",products);
app.use("/api/read/products",products);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started on Port : ${port}`);
});
