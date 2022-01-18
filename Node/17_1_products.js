// Instructions
// Let’s create a mongoose product modelwith validation for
// an e-commerce site.
// The product should have the following:
//  name, a string, which is required and should be
// unique.
//  category, a string, which is required.
//  isActive, a boolean.
//  details, which is an embedded object that includes:
// • a description, a string, which is required and has to
// be at least 10 letters in length.
// • Price, a number, which is required and has to be a
// positive value,
// • discount, a number, which is not required but the
// default is 0 if not inputted.
// • array of images which must include at least two
// images
// • a phone number which is required and has to be a
// valid Israeli phone number.
// • DateAdded, which by default gives the current date
// Add at least 3 products to your database.
// Feel free to add more validation or keys to your model

const mongoose = require("mongoose");
const connectionUri = "mongodb://127.0.0.1:27017";

mongoose.connect(`${connectionUri}/Exercise-Products-Ecommerce`, {
  useNewUrlParser: true,
});

const Product = mongoose.model("Products", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) throw new Error("price has to be a positive number");
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      required: true,
      validate(value) {
        if (value.length < 2)
          throw new Error("please provide at least 2 images");
      },
    },
    phone: {
      type: Number,
      required: true,
      validate(value) {
        if (value.length < 10 || !value.toString().includes("9725"))
          throw new Error("please provide valid Israeli phone number");
      },
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
  },
});

const shoes = new Product({
  name: "***2***nine-west sneakers",
  category: "fashion",
  isActive: true,
  details: {
    description: "stunning beautiful shoes!!!",
    price: 200,
    images: [1, 1],
    phone: 972584479757,
  },
});

const addProduct = async (item) => {
  try {
    await item.save();
  } catch (err) {
    console.log(err);
  }
};
addProduct(shoes);
