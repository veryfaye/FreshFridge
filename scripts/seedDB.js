// FILE IS HERE FOR EXAMPLE ONLY

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/reactreadinglist"
// );

mongoose.connect("mongodb://localhost/reactfreshfridge", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// source of expiration dates: https://foodshare.com/wp-content/uploads/2018/06/Food-Shelf-Life-Guide.pdf . Conservative expiration dates entered below. Date is calculated as if the item is opened on the day it is checked off the shopping list. Shelf life is in days.

const productSeed = [
  {
    product: "Juice",
    shelfLife: 7,
  },
  {
    product: "Buttermilk",
    shelfLife: 7,
  },
  {
    product: "Cheddar",
    shelfLife: 21,
  },
  {
    product: "Swiss Cheese",
    shelfLife: 21,
  },
  {
    product: "Parmesan (block)",
    shelfLife: 21,
  },
  {
    product: "Parmesan (shredded)",
    shelfLife: 31,
  },
  {
    product: "Shredded Cheese",
    shelfLife: 31,
  },
  {
    product: "Cheese Slices",
    shelfLife: 31,
  },
  {
    product: "Soft Cheese",
    shelfLife: 7,
  },
  {
    product: "Cottage Cheese",
    shelfLife: 7,
  },
  {
    product: "Ricotta",
    shelfLife: 7,
  },
  {
    product: "Cream Cheese",
    shelfLife: 14,
  },
  {
    product: "Whipping Cream",
    shelfLife: 31,
  },
  {
    product: "Whipped Cream (aerosol can)",
    shelfLife: 21,
  },
  {
    product: "Half-and-Half",
    shelfLife: 4,
  },
  {
    product: "Egg Substitutes",
    shelfLife: 3,
  },
  {
    product: "Kefir",
    shelfLife: 2,
  },
  {
    product: "Margarine",
    shelfLife: 180,
  },
  {
    product: "Milk",
    shelfLife: 7,
  },
  {
    product: "Sour Cream",
    shelfLife: 21,
  },
  {
    product: "Yogurt",
    shelfLife: 7,
  },
  {
    product: "Fresh Pasta",
    shelfLife: 2,
  },
  {
    product: "Pesto",
    shelfLife: 3,
  },
  {
    product: "Soy or rice beverage",
    shelfLife: 7,
  },
  {
    product: "Tofu",
    shelfLife: 7,
  },
  {
    product: "Miso",
    shelfLife: 90,
  },
  {
    product: "Fish",
    shelfLife: 2,
  },
  {
    product: "Caviar",
    shelfLife: 2,
  },
  {
    product: "Cooked Fish",
    shelfLife: 3,
  },
  {
    product: "Surimi Seafood",
    shelfLife: 3,
  },
  {
    product: "Shrimp",
    shelfLife: 2,
  },
  {
    product: "Scallops",
    shelfLife: 2,
  },
  {
    product: "Crayfish",
    shelfLife: 2,
  },
  {
    product: "Squid",
    shelfLife: 2,
  },
  {
    product: "Clams",
    shelfLife: 2,
  },
  {
    product: "Mussels",
    shelfLife: 2,
  },
  {
    product: "Oysters",
    shelfLife: 2,
  },
  {
    product: "Crab meat",
    shelfLife: 2,
  },
  {
    product: "Crab meat (pasteurized)",
    shelfLife: 3,
  },
  {
    product: "Crab legs, king, dungeness, snow",
    shelfLife: 5,
  },
  {
    product: "Lobster",
    shelfLife: 2,
  },
  {
    product: "Cooked shellfish",
    shelfLife: 4,
  },
  {
    product: "Herring",
    shelfLife: 3,
  },
  {
    product: "Salmon, whitefish, cold-smoked",
    shelfLife: 5,
  },
  {
    product: "Salmon, whitefish, hot-smoked",
    shelfLife: 14,
  },
  {
    product: "Beef",
    shelfLife: 4,
  },
  {
    product: "Lamb",
    shelfLife: 4,
  },
  {
    product: "Pork",
    shelfLife: 4,
  },
  {
    product: "Veal chops",
    shelfLife: 4,
  },
  {
    product: "Steaks",
    shelfLife: 4,
  },
  {
    product: "Roast",
    shelfLife: 4,
  },
  {
    product: "Ground Meat",
    shelfLife: 2,
  },
  {
    product: "Cooked Meat",
    shelfLife: 3,
  },
  {
    product: "Bacon",
    shelfLife: 7,
  },
  {
    product: "Cornedbeef, in pouch with pickling juices",
    shelfLife: 5,
  },
  {
    product: "Ham (whole, fully cooked)",
    shelfLife: 7,
  },
  {
    product: "Ham (slices or half)",
    shelfLife: 3,
  },
  {
    product: "Ham",
    shelfLife: 7,
  },
  {
    product: "Hotdogs",
    shelfLife: 7,
  },
  {
    product: "Lunch meat",
    shelfLife: 5,
  },
  {
    product: "Sausage link",
    shelfLife: 7,
  },
  {
    product: "Sausage Patties",
    shelfLife: 7,
  },
  {
    product: "Pepperoni",
    shelfLife: 14,
  },
  {
    product: "Chicken",
    shelfLife: 2,
  },
  {
    product: "Duckling or goose",
    shelfLife: 2,
  },
  {
    product: "Giblets",
    shelfLife: 2,
  },
  {
    product: "Chicken nuggets",
    shelfLife: 2,
  },
  {
    product: "Cooked poultry dish",
    shelfLife: 3,
  },
  {
    product: "Fried chicken",
    shelfLife: 3,
  },
  {
    product: "Poultry lunch meat",
    shelfLife: 5,
  },
  {
    product: "Rotisserie chicken",
    shelfLife: 4,
  },
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
  {
    product: "Grapes",
    shelfLife: 7,
  },
  {
    product: "Kiwi",
    shelfLife: 3,
  },
  {
    product: "Melons",
    shelfLife: 3,
  },
  {
    product: "Papaya",
    shelfLife: 7,
  },
  {
    product: "Mango",
    shelfLife: 7,
  },
  {
    product: "Peach",
    shelfLife: 3,
  },
  {
    product: "Pear",
    shelfLife: 3,
  },
  {
    product: "Plum",
    shelfLife: 3,
  },
  {
    product: "Artichoke",
    shelfLife: 7,
  },
  {
    product: "Asparagus",
    shelfLife: 3,
  },
  {
    product: "Beets",
    shelfLife: 7,
  },
  {
    product: "Bok Choy",
    shelfLife: 2,
  },
  {
    product: "Broccoli",
    shelfLife: 5,
  },
  {
    product: "Broccoli Raab",
    shelfLife: 5,
  },
  {
    product: "Broccoli Rapini",
    shelfLife: 5,
  },
  {
    product: "Brussels Sprouts",
    shelfLife: 5,
  },
  {
    product: "Cauiliflower",
    shelfLife: 7,
  },
  {
    product: "Cabbage",
    shelfLife: 7,
  },
  {
    product: "Carrots",
    shelfLife: 21,
  },
  {
    product: "Celery",
    shelfLife: 7,
  },
  {
    product: "Corn",
    shelfLife: 7,
  },
  {
    product: "Cucumber",
    shelfLife: 4,
  },
  {
    product: "Eggplant",
    shelfLife: 3,
  },
  {
    product: "Garlic",
    shelfLife: 7,
  },
  {
    product: "Ginger",
    shelfLife: 7,
  },
  {
    product: "Greens",
    shelfLife: 2,
  },
  {
    product: "Herbs",
    shelfLife: 7,
  },
  {
    product: "Leeks",
    shelfLife: 7,
  },
  {
    product: "Iceberg Lettuce",
    shelfLife: 7,
  },
  {
    product: "Mushrooms",
    shelfLife: 3,
  },
  {
    product: "Okra",
    shelfLife: 3,
  },
  {
    product: "Onions",
    shelfLife: 60,
  },
  {
    product: "Green Onions",
    shelfLife: 7,
  },
  {
    product: "Parsley",
    shelfLife: 7,
  },
  {
    product: "Cilantro",
    shelfLife: 7,
  },
  {
    product: "Bell Pepper",
    shelfLife: 5,
  },
  {
    product: "Potatoes",
    shelfLife: 7,
  },
  {
    product: "Mango",
    shelfLife: 7,
  },
  {
    product: "Radishes",
    shelfLife: 10,
  },
  {
    product: "Rutabagas",
    shelfLife: 14,
  },
  {
    product: "Spinach",
    shelfLife: 2,
  },
  {
    product: "Squash, Summer",
    shelfLife: 4,
  },
  {
    product: "Squash, Winter",
    shelfLife: 14,
  },
  {
    product: "Tomatoes",
    shelfLife: 2,
  },
  {
    product: "Olives",
    shelfLife: 14,
  },
  {
    product: "Barbecue Sauce",
    shelfLife: 120,
  },
  {
    product: "Ketchup",
    shelfLife: 186,
  },
  {
    product: "Chutney",
    shelfLife: 60,
  },
  {
    product: "Mango",
    shelfLife: 7,
  },

];

db.Food.remove({})
  .then(() => db.Food.collection.insertMany(productSeed))
  .then((data) => {
    console.log(data.result.n + " product dates have been inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
