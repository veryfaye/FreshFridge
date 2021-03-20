import React from "react";
import "../style/Item.css";
import { Cross } from "@styled-icons/entypo/Cross";
import { ArrowheadRightOutline } from "@styled-icons/evaicons-outline/ArrowheadRightOutline";

export default function FridgeItem({ id, message, expDate, eatItem, tossItem }) {
  return (
    <div className="item">
      <div className="deleteButton">
        <Cross onClick={() => tossItem(id)}></Cross>
      </div>
      <div className="foodName">
        <p>
          {message} {expDate}
          <ArrowheadRightOutline
            className="fridgeButton"
            onClick={() => (eatItem(id))}
          ></ArrowheadRightOutline>
        </p>
      </div>
    </div>
  );
}
