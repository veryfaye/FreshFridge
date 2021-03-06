import React from "react";
import "../style/Item.css";
import { Cross } from "@styled-icons/entypo/Cross";
import { ArrowheadRightOutline } from "@styled-icons/evaicons-outline/ArrowheadRightOutline";

export default function Item({ id, message, deleteNote }) {
  return (
    <div className="item row">
      <div className="col-sm">
        <div className="deleteButton">
          <Cross onClick={() => deleteNote(id)}></Cross>
        </div>
      </div>
      <div className="col-sm-5">
        <div className="foodName">
          {message} | id= {id}
        </div>
      </div>
      <div className="col-sm">
        <div className="fridgeButton">
          <ArrowheadRightOutline
            onClick={() => deleteNote(id)}
          ></ArrowheadRightOutline>
        </div>
      </div>
    </div>
  );
}
