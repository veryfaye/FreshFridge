import React from "react";
import "../style/Item.css";
import { ArrowheadRightOutline } from "@styled-icons/evaicons-outline/ArrowheadRightOutline";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

export default function Item({ id, message, deleteItem, moveItem }) {
  return (
    <div className="item">
      <CloseOutline
        type="button"
        className="deleteButton"
        onClick={() => deleteItem(id)}
      />
      <div className="foodName">
        <p>
          {message}
          <ArrowheadRightOutline
            type="button"
            className="fridgeButton"
            onClick={() => moveItem(id)}
          />
        </p>
      </div>
    </div>
  );
}
