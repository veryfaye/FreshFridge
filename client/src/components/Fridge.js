import React, { useEffect, useContext, useState } from "react";
import API from "../utils/API";
import FridgeItem from "./FridgeItem";
import { StoreContext } from "../utils/store";

export default function Fridge() {
  const {
    list: [growingFoodList, setGrowingFoodList],
  } = useContext(StoreContext);

  const {
    fridgeItem: [fridgeItem, setFridgeItem],
  } = useContext(StoreContext);
  useEffect(() => {
    console.log(fridgeItem);
  }, [fridgeItem]);

  useEffect(() => {}, [growingFoodList]);

  useEffect(() => {
    API.userFridge()
      .then((res) => {
        let FoodRes = res.data.fridges.filter(
          (food) => !food.tossed && !food.eaten
        );
        setFridgeItem(FoodRes);
      })
      .catch((err) => {});
  }, []);

  function getDate(date) {
    const splitDate = date.substr(0, 10).split("-");
    return splitDate[1] + "-" + splitDate[2] + "-" + splitDate[0];
  }

  const handleEatItem = (id) => {
    const foodList = [...fridgeItem];
    setFridgeItem(foodList.filter((product) => product._id !== id));
    API.updateFridge(id, {
      eaten: true,
      eatenDate: new Date(),
    })
      .then((res) => {})
      .catch((err) => {});
  };

  const handleTossItem = (id) => {
    const foodList = [...fridgeItem];
    setFridgeItem(foodList.filter((product) => product._id !== id));
    API.updateFridge(id, {
      tossed: true,
      tossedDate: new Date(),
    })
      .then((res) => {})
      .catch((err) => {});
  };

  const renderFood = () => {
    let FoodResult = null;
    //find a match in the data
    if (fridgeItem.length > 0) {
      return fridgeItem.map((food) => {
        return (
          <FridgeItem
            key={food._id}
            message={food.product}
            expDate={getDate(food.expirationDate)}
            tossItem={() => handleTossItem(food._id)}
            eatItem={() => handleEatItem(food._id)}
          />
        );
      });
    }
  };

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div>
            <h2>Eat or toss items from your Fridge!</h2>
            <div className="foodList">{renderFood()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
