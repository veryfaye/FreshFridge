var input = document.querySelector("input");
var foodSearch = [
  "Juice",
  "Buttermilk",
  "Cheddar",
  "Swiss Cheese",
  "Parmesan (block)",
  "Parmesan (shredded)",
  "Shredded Cheese",
  "Cheese Slices",
  "Soft Cheese",
  "Cottage Cheese",
  "Ricotta",
  "Cream Cheese",
  "Whipping Cream",
  "Whipped Cream (aerosol can)",
  "Half-and-Half",
  "Egg Substitutes",
  "Kefir",
  "Margarine",
  "Milk",
  "Sour Cream",
  "Yogurt",
  "Fresh Pasta",
  "Pesto",
  "Soy or rice beverage",
  "Tofu",
  "Miso",
  "Fish",
  "Caviar",
  "Cooked Fish",
  "Surimi Seafood",
  "Shrimp",
  "Scallops",
  "Crayfish",
  "Squid",
  "Clams",
  "Mussels",
  "Oysters",
  "Crab meat",
  "Crab meat (pasteurized)",
  "Crab legs, king, dungeness, snow",
  "Lobster",
  "Cooked shellfish",
  "Herring",
  "Salmon, whitefish, cold-smoked",
  "Salmon, whitefish, hot-smoked",
  "Beef",
  "Lamb",
  "Pork",
  "Veal chops",
  "Steaks",
  "Roast",
  "Ground Meat",
  "Cooked Meat",
  "Bacon",
  "Cornedbeef, in pouch with pickling juices",
  "Ham (whole, fully cooked)",
  "Ham (slices or half)",
  "Ham",
  "Hotdogs",
  "Lunch meat",
  "Sausage link",
  "Sausage Patties",
  "Pepperoni",
  "Chicken",
  "Duckling or goose",
  "Giblets",
  "Chicken nuggets",
  "Cooked poultry dish",
  "Fried chicken",
  "Poultry lunch meat",
  "Rotisserie chicken",
  "Fried Chicken",
  "Poultry Lunch Meat",
  "Rotisserie Chicken",
  "Apples",
  "Apricots",
  "Avocado",
  "Cherries",
  "Oranges",
  "Citrus",
  "Coconuts",
  "Grapes",
  "Kiwi",
  "Melons",
  "Papaya",
  "Mango",
  "Peach",
  "Pear",
  "Plum",
  "Artichoke",
  "Asparagus",
  "Beets",
  "Bok Choy",
  "Broccoli",
  "Broccoli Raab",
  "Broccoli Rapini",
  "Brussels Sprouts",
  "Cauiliflower",
  "Cabbage",
  "Carrots",
  "Celery",
  "Corn",
  "Cucumber",
  "Eggplant",
  "Garlic",
  "Ginger",
  "Greens",
  "Herbs",
  "Leeks",
  "Iceberg Lettuce",
  "Mushrooms",
  "Okra",
  "Onions",
  "Green Onions",
  "Parsley",
  "Cilantro",
  "Bell Pepper",
  "Potatoes",
  "Mango",
  "Radishes",
  "Rutabagas",
  "Spinach",
  "Squash, Summer",
  "Squash, Winter",
  "Tomatoes",
  "Olives",
  "Barbecue Sauce",
  "Ketchup",
  "Chutney",
  "Mango",
];

var results;
// autocomplete logic
function autocomplete(val) {
  var inputResults = [];

  for (i = 0; i < foodSearch.length; i++) {
    if (val === foodSearch[i].slice(0, val.length)) {
      inputResults.push(foodSearch[i]);
    }
  }
  return inputResults;
}

// events
input.onkeyup = function (e) {
  inputValue = this.value;
  // updates the variable on each occurrence

  if (inputValue.length > 0) {
    var displayFood = [];

    autocompleteResults = document.getElementById("autocomplete-results");
    autocompleteResults.innerHTML = "";
    foodToDisplay = autocomplete(inputValue);

    for (i = 0; i < foodToDisplay.length; i++) {
      autocompleteResults.innerHTML += "<li>" + displayFood[i] + "</li>";
    }
    autocompleteResults.style.display = "block";
  } else {
    foodToDisplay = [];
    autocompleteResults.innerHTML = "";
  }
};
