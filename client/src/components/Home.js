import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import List from "./List";
import Fridge from "./Fridge";
import Moment from "./Date";
import { StoreContext } from "../utils/store";
// import Item from "./item";

//
export default function Home() {
  // const [grocItem, setGrocItem] = useState([]);
  // const [growingFoodList, setGrowingFoodList] = useState([]);

  // const { grocery } = React.useContext(StoreContext);
  // const { list } = React.useContext(StoreContext);

   // const [growingFoodList, setGrowingFoodList] = useState([]);
   const {
    grocery: [grocItem, setGrocItem],
  } = React.useContext(StoreContext);

  const {
    list: [growingFoodList, setGrowingFoodList],
  } = React.useContext(StoreContext);




  // useEffect(() => {
  //   API.getFood()
  //     .then((res) => {
  //       setGrocItem(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   API.getAllGrocery()
  //     .then((res) => {
  //       setGrowingFoodList(res.data.foods);
  //       console.log(growingFoodList);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log("****rerendering");
  // }, [growingFoodList]);

  // const handleRenderFood = () => {
  //   let FoodResult = null;

  //   //find a mach in the data
  //   if (growingFoodList.length > 0) {
  //     FoodResult = growingFoodList.map((food) => {
  //       return (
  //         <Item
  //           key={food._id}
  //           message={food.product}
  //           deleteItem={() => handleDeleteItem(food._id)}
  //           moveItem={() =>
  //             handleMoveItem(food._id, food.product, food.shelfLife)
  //           }
  //         />
  //       );
  //     });
  //   }
  //   return FoodResult;
  // };

  // const handleFindFood = (event) => {
  //   event.preventDefault();
  //   //get the picked name
  //   const userInput = document.querySelector("#test").value.toLowerCase();
  //   //get the state
  //   const foodList = [...growingFoodList];
  //   //find the match - just iterate
  //   grocItem.map((food) => {
  //     //check for match
  //     if (food.product.toLowerCase() === userInput) {
  //       foodList.push(food);
  //       API.addGrocery(food._id)
  //         .then((res) => {})
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //     document.querySelector("#input").value = "";
  //   });
  //   //set state of growing list
  //   setGrowingFoodList(foodList);
  // };

  // const handleMoveItem = (id, product, shelfLife) => {
  //   const foodList = [...growingFoodList];
  //   setGrowingFoodList(foodList.filter((product) => product._id !== id));
  //   let purchDate = new Date().getTime();
  //   let expDate = purchDate + shelfLife * 24 * 60 * 60 * 1000;
  //   API.addFridge({
  //     product: product,
  //     purchaseDate: purchDate,
  //     expirationDate: expDate,
  //   })
  //     .then((res) => {})
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleDeleteItem = (id) => {
  //   const foodList = [...growingFoodList];
  //   setGrowingFoodList(foodList.filter((product) => product._id !== id));
  //   API.removeGrocery(id)
  //     .then((res) => {})
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="auth-wrapper">
      <nav className="navbar navbar-expand-sm navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>
            FreshFridge
          </Link>
          <div className="date">
            <Moment />
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="date"></div>
      <div className="row">
        <div className="col-sm-6">
          <List
          // renderFood={handleRenderFood}
          // FindFood={handleFindFood}
          />
        </div>
        <div className="col-sm-6">
          <Fridge />
        </div>
      </div>
    </div>
  );
}
