import React, { useEffect } from "react";
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

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {}, [growingFoodList]);

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
    //get the picked name
    const userInput = document.querySelector("#input").value.toLowerCase();
    //get the state
    const foodList = [...growingFoodList];
    //find the match - iterate
    grocItem.map((food) => {
      //check for match
      if (food.product.toLowerCase() === userInput) {
        foodList.push(food);
        API.addGrocery(food._id)
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
      }
      document.querySelector("#input").value = "";
    });
    //set state of growing list
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
      .catch((err) => {
        console.log(err);
      });
    API.removeGrocery(id)
      .then((res) => {
          window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
   
  };

  const handleDeleteItem = (id) => {
    const foodList = [...growingFoodList];
    setGrowingFoodList(foodList.filter((product) => product._id !== id));
    API.removeGrocery(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          <h2>Add items to your grocery list!</h2>
          <form>
            <div className="list container">
              <div className="input-group mb-3">
                <input
                  id="input"
                  type="text"
                  className="input form-control"
                  placeholder="Grocery Item"
                />
                <button
                  id="addButton"
                  className="btn btn-success"
                  onClick={(event) => {
                    handleFindFood(event);
                  }}
                >
                  ADD
                </button>
              </div>
            </div>
          </form>
          <div>{renderFood()}</div>
          <hr />
        </div>
      </div>
    </div>
  );
}
