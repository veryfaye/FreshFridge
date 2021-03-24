import React from "react";
import "../style/Item.css";
import { SpoonKnife } from "@styled-icons/icomoon/SpoonKnife";
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
      <Trash2Outline
        type="button"
        className="deleteButton"
        onClick={() => tossItem(id)}
      />
      <div className="foodName">
        <p>
          {message}
          <SpoonKnife
            type="button"
            className="fridgeButton"
            onClick={() => eatItem(id)}
          />
          <span className="expDate"> Exp: {expDate}</span>
        </p>
      </div>
    </div>
  );
}
