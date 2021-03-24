import React from "react";
import "../style/Item.css";
import { SpoonKnife } from "@styled-icons/icomoon/SpoonKnife";
import { Trash } from "@styled-icons/ionicons-outline/Trash";
import { Trash2Outline } from "@styled-icons/evaicons-outline/Trash2Outline";

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
        <Trash2Outline onClick={() => tossItem(id)}></Trash2Outline>
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
