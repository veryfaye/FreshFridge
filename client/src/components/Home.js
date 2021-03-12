import React, { Component } from "react";
import List from "./List";
import Fridge from "./Fridge";

export default function Home() {
  return (
    <div className="auth-wrapper">
      <div className="row">
        <div className="col-sm-6">
          <List />
        </div>
        <div className="col-sm-6">
          <Fridge />
        </div>
      </div>
    </div>
  );
}
