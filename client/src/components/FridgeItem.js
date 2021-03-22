import React from "react";
import "../style/Item.css";
import { SpoonKnife } from "@styled-icons/icomoon/SpoonKnife";
import { Trash } from "@styled-icons/ionicons-outline/Trash";

export default function FridgeItem({
  id,
  message,
  expDate,
  eatItem,
  tossItem,
}) {
  return (
    <div className="item">
      <div className="deleteButton">
        <Trash onClick={() => tossItem(id)}></Trash>
      </div>
      <div className="foodName">
        <p>
          {message}
          <SpoonKnife
            className="fridgeButton"
            onClick={() => eatItem(id)}
          ></SpoonKnife>
          <span className="expDate"> Exp: {expDate}</span>
        </p>
      </div>
    </div>
  );
}
