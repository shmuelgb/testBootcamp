// Instructions
// Create the right routes and use postman to test your work
// to do the following:
// Create
// 1.Create a product
// Read
// 1. Get all products
// 2. Get a specific product
// 3. Get products that are active
// 4. Get products with a specific price range
// (example min = 50 max = 500)

require("mongoose");
const { Product } = require("./17_1_products");
const express = require("express");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

//Create new product===>
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    //Todo: find and send the mongo doc created
    res.send(newProduct);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Get all products===>
app.get("/products", async (req, res) => {
  const query = req.query;
  try {
    if (Object.keys(query).length === 0) res.send(await getAllProducts());
    if (query.isActive) res.send(await getAllActiveProducts());
    if (query.price) {
      const min = query.min;
      const max = query.max;
      res.send(await getProductsByPrice(min, max));
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

//Get product by id===>
app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const foundProduct = await Product.findById(id);
    res.send(foundProduct);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Get all active products===>
app.get("/activeProducts", async (req, res) => {
  try {
    const foundProducts = await Product.find({ isActive: true });
    res.send(foundProducts);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const getAllProducts = async () => {
  try {
    return await Product.find({});
  } catch (e) {
    throw new Error(e);
  }
};

const getAllActiveProducts = async () => {
  try {
    return await Product.find({ isActive: true });
  } catch (e) {
    throw new Error(e);
  }
};

const getProductsByPrice = async (min, max) => {
  try {
    return await Product.find({
      $and: [
        { "details.price": { $gte: min } },
        { "details.price": { $lte: max } },
      ],
    });
  } catch (e) {
    throw new Error(e);
  }
};
