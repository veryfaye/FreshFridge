import React from "react";
import "../style/Item.css";
import { Cross } from "@styled-icons/entypo/Cross";
import { ArrowheadRightOutline } from "@styled-icons/evaicons-outline/ArrowheadRightOutline";

export default function Item({ id, message, deleteItem, moveNote }) {
  return (
    <div className="item">
      <div className="deleteButton">
        <Cross onClick={() => deleteItem(id)}></Cross>
      </div>
      <div className="foodName">
        <p>
          {message}
          <ArrowheadRightOutline
            className="fridgeButton"
            onClick={() => (deleteItem(id), moveNote(id))}
          ></ArrowheadRightOutline>
        </p>
      </div>
    </div>
  );
}
