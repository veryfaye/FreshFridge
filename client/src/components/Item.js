import React from "react";
import "../style/Item.css";
import { Cross } from "@styled-icons/entypo/Cross";
import { ArrowheadRightOutline } from "@styled-icons/evaicons-outline/ArrowheadRightOutline";

export default function Item({ id, message, deleteNote, moveNote }) {
  return (
    <div className="item row">
      <div className="col-sm-1">
        <div className="deleteButton">
          <Cross onClick={() => deleteNote(id)}></Cross>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="foodName">
          <p>{message}</p>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="fridgeButton">
          <ArrowheadRightOutline
            onClick={() => moveNote(id)}
          ></ArrowheadRightOutline>
        </div>
      </div>
    </div>
  );
}
