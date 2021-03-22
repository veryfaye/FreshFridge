import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Item from "./Item";
import { StoreContext } from "../utils/store";

export default function List() {
  const {
    grocery: [grocItem, setGrocItem],
  } = React.useContext(StoreContext);

  const {
    list: [growingFoodList, setGrowingFoodList],
  } = React.useContext(StoreContext);

  const {
    getData: [loadData],
  } = React.useContext(StoreContext);

  const [suggestionsListComponent, setListComponent] = useState(<div></div>);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {}, [growingFoodList], suggestionsListComponent);

  const renderFood = () => {
    let FoodResult = null;

    //find a mach in the data
    if (growingFoodList.length > 0) {
      FoodResult = growingFoodList.map((food) => {
        return (
          <Item
            key={food._id}
            message={food.product}
            deleteItem={() => handleDeleteItem(food._id)}
            moveItem={() =>
              handleMoveItem(food._id, food.product, food.shelfLife)
            }
          />
        );
      });
    }
    return FoodResult;
  };

  const handleFindFood = (event) => {
    event.preventDefault();
    //get the state
    const foodList = [...growingFoodList];
    //find the match - iterate
    grocItem.map((food) => {
      //check for match
      if (food.product === event.target.textContent) {
        foodList.push(food);
        API.addGrocery(food._id)
          .then((res) => {})
          .catch((err) => {});
      }
      document.querySelector("#input").value = "";
    });
    //set state of growing list
    setListComponent(<div></div>);
    setGrowingFoodList(foodList);
  };

  const handleMoveItem = (id, product, shelfLife) => {
    const foodList = [...growingFoodList];
    setGrowingFoodList(foodList.filter((product) => product._id !== id));
    let purchDate = new Date().getTime();
    let expDate = purchDate + shelfLife * 24 * 60 * 60 * 1000;
    API.addFridge({
      product: product,
      purchaseDate: purchDate,
      expirationDate: expDate,
    })
      .then((res) => {})
      .catch((err) => {});
    API.removeGrocery(id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {});
  };

  const handleDeleteItem = (id) => {
    const foodList = [...growingFoodList];
    setGrowingFoodList(foodList.filter((product) => product._id !== id));
    API.removeGrocery(id)
      .then((res) => {})
      .catch((err) => {});
  };

  const handleInputChange = (e) => {
    let userFoodInput = e.target.value;

    if (userFoodInput.length > 2) {
      let possibleFoods = grocItem.filter((foodItem) =>
        foodItem.product.toLowerCase().includes(userFoodInput.toLowerCase())
      );

      if (possibleFoods.length) {
        setListComponent(
          <ul>
            {possibleFoods.map((suggestion, index) => {
              return (
                <button
                  className="foodCompletionSuggestionButton btn btn-success"
                  key={suggestion._id}
                  onClick={(e) => {
                    handleFindFood(e);
                  }}
                  id={suggestion._id}
                >
                  {suggestion.product}
                </button>
              );
            })}
          </ul>
        );
      } else {
        setListComponent(
          <div>
            <em>No suggestions!</em>
          </div>
        );
      }
    } else {
      setListComponent(<div></div>);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          <h2>Add items to your grocery list!</h2>
          <form>
            <div className="list container">
              <div className="input-group mb-3">
                <React.Fragment>
                  <input
                    id="input"
                    type="text"
                    className="input form-control"
                    placeholder="Grocery Item"
                    onChange={handleInputChange}
                  />
                </React.Fragment>
              </div>
            </div>
            {suggestionsListComponent}
          </form>
          <div className="foodList">{renderFood()}</div>
          <hr />
        </div>
      </div>
    </div>
  );
}
