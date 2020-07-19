import React, { Component } from "react";
import { createStore, useStore } from "react-hookstore";

import HardDisk from '../images/computer_harddisk.png'

export function ChooseStomachSize({onChange}){

    var [stomachList, updateStomachList] = useStore(StomachListStore);

    function stomachSizeSelected(event) {
        var size
        switch(event.target.id){
            case 'size25':
                size = 25
                break
            case 'size50':
                size = 50
                break
            case 'size99':
                size = 100
                break
        }
        
        updateStomachList({type: "updateStomachSize", payload:size})
        onChange(event.target)
    }

    return (
        <div className="chooseStomachSize">
            <img src={HardDisk}/>
            <h1>Select a Size</h1>
            <div className="btn-grp">
                <button className="btn-size" id="size25" onClick={stomachSizeSelected}>25 GB</button>
                <button className="btn-size" id="size50" onClick={stomachSizeSelected}>50 GB</button>
                <button className="btn-size" id="size99" onClick={stomachSizeSelected}>99 GB</button>
            </div>
        </div>
    )
    
}

export const StomachListStore = createStore(
  "stomachList",
  {
    stomachSize: 0,
    foodStomachId: 0,
    foodItems: [],
  },
  (state, action) => {
    switch (action.type) {
      case "add":
        const id = ++state.foodStomachId;
        return {
          ...state,
          foodItems: [...state.foodItems, { id, name: action.payload }],
        };
        
        case "updateStomachSize":
            return{
                ...state,
                stomachSize: action.payload
            }
    }
  }
);

function StomachList() {
  function createStomachListItems(food_id, food_type, food_name) {
    return { food_id, food_type, food_name };
  }
 var [stomachListItems] = useStore(StomachListStore);
  var stomachListPrint = [];

  var full = stomachListItems.foodItems.length >= stomachListItems.stomachSize
  

  if (stomachListItems.foodItems.length === 0) {
    return (
      <div className="stomachList">
        <h1>Click a Treat to eat!</h1>
      </div>
    );
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
      <div className="stomachList">
          {full ? (<h1>You ate enough!</h1>) : ''}
        <h1>You Ate:</h1>
        <div className="stomach-foodList">
          <ul>
            {stomachListItems.foodItems.map((foodItem) => (
              <li key={foodItem.id}>{foodItem.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default StomachList;
