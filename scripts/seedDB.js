// FILE IS HERE FOR EXAMPLE ONLY


const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/reactreadinglist"
// );

mongoose.connect("mongodb://localhost/FreshFridge", {
  useNewUrlParser: true,
  useFindAndModify: false
});


const product = [
  {
    product: "Fried Chicken",
    shelfLife: 3,
  },
  {
    product: "Poultry Lunch Meat",
    shelfLife: 5,
  },
  {
    product: "Rotisserie Chicken",
    shelfLife: 4,
  },
  {
    product: "Apples",
    shelfLife: 21,
  },
  {
    product: "Apricots",
    shelfLife: 3,
  },
  {
    product: "Avocado",
    shelfLife: 3,
  },
  {
    product: "Cherries",
    shelfLife: 2,
  },
  {
    product: "Oranges",
    shelfLife: 7,
  },
  {
    product: "Citrus",
    shelfLife: 7,
  },
  {
    product: "Coconuts",
    shelfLife: 14,
  },
];

db.FreshFridge
  .remove({})
  .then(() => db.FreshFridge.collection.insertMany(product))
  .then(data => {
    console.log(data.result.n + " product dates have been inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
