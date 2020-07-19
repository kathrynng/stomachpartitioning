import React, { Component } from "react";
import { createStore, useStore } from "react-hookstore";

export const StomachListStore = createStore(
  "stomachList",
  {
    foodStomachId: 0,
    foodItems: [],
  },
  (state, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "add":
        const id = ++state.foodStomachId;
        return {
          ...state,
          foodItems: [...state.foodItems, { id, name: action.payload }],
        };
    }
  }
);

function StomachList() {
  function createStomachListItems(food_id, food_type, food_name) {
    return { food_id, food_type, food_name };
  }
  var [stomachListItems] = useStore(StomachListStore);
  var stomachListPrint = [];

  if (stomachListItems.foodItems.length === 0) {
    return (
        <div className='stomachList'>
            <h1>Click a Treat to eat!</h1>
        </div>);
  } else {
    for (var n = 0; n < stomachListItems.length; n++) {
      stomachListPrint.push(
        createStomachListItems(
          stomachListItems.foodItems[n].id,
          stomachListItems.foodItems[n].type,
          stomachListItems.foodItems[n].name
        )
      );
    }

    return (
<div className='stomachList'>
        <h1>You Ate:</h1>
      <ul>
        {stomachListItems.foodItems.map((foodItem) => (
          <li key={foodItem.id}>{foodItem.name}</li>
        ))}
      </ul>
      </div>
    );
  }
}

export default StomachList;
