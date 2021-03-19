import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Item from "./Item";

export default function List() {
  const [grocItem, setGrocItem] = useState([]);
  const [growingFoodList, setGrowingFoodList] = useState([]);

  useEffect(() => {
    API.getFood()
      .then((res) => {
        setGrocItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    API.getAllGrocery()
      .then((res) => {
        setGrowingFoodList(res.data.foods);
        console.log(growingFoodList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("****rerendering");
  }, [growingFoodList]);

  const renderFood = () => {
    let FoodResult = null;

    //find a mach in the data
    if (growingFoodList.length > 0) {
      FoodResult = growingFoodList.map((food) => {
        return <Item 
        key={food._id} 
        message={food.product} 
        deleteItem={()=>handleDeleteItem(food._id)}
        moveItem={()=>handleMoveItem(food._id, food.product, food.shelfLife)}
        />;
      });
    }

    {
      /* {notes.map((note) => (
            <Item
              id={note.id}
              message={note.message}
              deleteNote={(id) => deleteNote(id, notes, setNotes)}
              moveNote={(id) => moveNote(id)}
            />
          ))} */
    }

    return FoodResult;
  };

  const handleFindFood = (event) => {
    event.preventDefault();
    //get the picked name
    const userInput = document.querySelector("#test").value.toLowerCase();
    //get the state
    const foodList = [...growingFoodList];
    //find the match - just iterate
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
      document.querySelector("#test").value = "";
    });
    //set state of growing list
    setGrowingFoodList(foodList);
  };

  const handleMoveItem = (id, product, shelfLife) => {
    const foodList = [...growingFoodList];
    setGrowingFoodList(foodList.filter((product) => product._id !== id));
    let purchDate= new Date().getTime();
    let expDate= purchDate + shelfLife*24*60*60*1000
    API.addFridge({ 
      product: product,
      purchaseDate: purchDate,
      expirationDate: expDate,
    })
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
  };

  const handleDeleteItem = (id) => {
    const foodList = [...growingFoodList];
    setGrowingFoodList(foodList.filter((product) => product._id !== id));
    API.removeGrocery(id)
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
  };

  //when page renders after sign-in
  // get route to display all grocery list items from User's foods list(grocery)
  // getAllGrocery: function() {
  //   return axios.get("/api/user/get-all/grocery");
  // },

  // when x-delete button is clicked, we use delete route to remove the item from  foods list(grocery) BY ID
  // removeGrocery: function(id) {
  //   return axios.get("/api/food/delete/" + id);
  // }

  // when move button is clicked, we use we use delete route to remove the item from foods list(grocery) BY ID
  // we use get route to grab item from FOODS
  // use post route to add item to User's db

  // when fridge components mounts
  // get all items from FOODS db
  // get and display all items from User's fridge
  //

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          <h2>Add items to your grocery list!</h2>
          <form>
            <div className="list container">
              <div className="input-group mb-3">
                <input
                  id="test"
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
