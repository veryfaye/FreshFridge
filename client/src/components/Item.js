import React from "react";
import "../style/Item.css";
import { Cross } from "@styled-icons/entypo/Cross";
import { ArrowheadRightOutline } from "@styled-icons/evaicons-outline/ArrowheadRightOutline";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

export default function Item({ id, message, deleteItem, moveItem }) {
  return (
    <div className="item">
      <div className="deleteButton">
        <CloseOutline onClick={() => deleteItem(id)}></CloseOutline>
      </div>
      <div className="foodName">
        <p>
          {message}
          <ArrowheadRightOutline
            className="fridgeButton"
            onClick={() => moveItem(id)}
          ></ArrowheadRightOutline>
        </p>
      </div>
    </div>
  );
}
