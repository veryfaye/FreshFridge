import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Item from "./Item"

export default function List() {
  const [grocItem, setGrocItem] = useState([]);
  const [growingFoodList, setGrowingFoodList] = useState([]);

  useEffect(() => {
    API.getFood()
      .then((res) => {
        console.log(res.data);
        setGrocItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("****rerendering");
  }, [growingFoodList]);

  const renderFood = () => {
    let FoodResult = null;
    
    //find a mach in the data
    console.log("******gfl",growingFoodList);
    if (growingFoodList.length > 0) {
      FoodResult = growingFoodList.map((food) => {
        console.log("******food",food);
        return (
          // <div key={food._id}>{food.product}</div>
          <Item
          key={food._id}
          message={food.product} />
        );
      });
    }

  console.log("******FoodResult",FoodResult);
     {/* {notes.map((note) => (
            <Item
              id={note.id}
              message={note.message}
              deleteNote={(id) => deleteNote(id, notes, setNotes)}
              moveNote={(id) => moveNote(id)}
            />
          ))} */}

    return FoodResult;
  };

  const handleFindFood = (event) => {
    //console.log("*****grocItem",grocItem);
    event.preventDefault();

    //get the picked name
    const userInput = document.querySelector("#test").value.toLowerCase();

    //get the state
    const foodList = [...growingFoodList];

    //find the match - just iterate
    grocItem.map((food) => {
      //check for match
      if (food.product.toLowerCase() === userInput) {
        foodList.push(food);
      }
      document.querySelector("#test").value=""
    });

    //set state of growing list
    setGrowingFoodList(foodList);
    console.log("*******growingFoodList", growingFoodList);
  };

  const moveNote = (id) => {
    alert("hello world");
  };

  // const deleteNote = (id, notes, setNotes) => {
  //   setNotes(notes.filter((note) => note.id !== id));
  // };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          <h2>Add items to your grocery list!</h2>
          <form
          // onSubmit={(e) => handleSubmit(e, notes, setNotes, input, setInput)}
          >
            <div className="list container">
              <div className="input-group mb-3">
                <input
                  id="test"
                  type="text"
                  className="input form-control"
                  placeholder="Grocery Item"
                  // onChange={(e) => setInput(e.target.value)}
                  // value={input}
                  
                />
                <button id="addButton" className="btn btn-success" onClick={(event) => {handleFindFood(event)}}>
                  ADD
                </button>
              </div>
            </div>
          </form>
        
          <div>{renderFood()}</div>
          
          {/* {notes.map((note) => (
            <Item
              id={note.id}
              message={note.message}
              deleteNote={(id) => deleteNote(id, notes, setNotes)}
              moveNote={(id) => moveNote(id)}
            />
          ))} */}
          <hr />
        </div>
      </div>
    </div>
  );
}
