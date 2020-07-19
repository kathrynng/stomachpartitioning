import React, { Component, useState, useEffect } from "react";

import Foods from "./images";

import {StomachListStore} from './Stomach'
import {useStore} from 'react-hookstore'

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food1: Foods[0],
      food2: Foods[1],
      food3: Foods[2],
      food4: Foods[3],
    };
    this.onChange = this.onChange.bind(this) 
  }

  onChange = (value) => {
    var currentFoodList = [this.state.food1, this.state.food2, this.state.food3, this.state.food4]
      var changeToFood = Foods[Math.floor(Math.random() * Foods.length)]
      while (currentFoodList.includes(changeToFood)) changeToFood = Foods[Math.floor(Math.random() * Foods.length)]
      this.setState({['food'+value]: changeToFood});
  }

  randomizeFood = () => {
    var currentFoodList = [this.state.food1, this.state.food2, this.state.food3, this.state.food4]
    var newFoodList = []
    
    for(var n = 1; n <= 4; n++){
      var changeToFood = Foods[Math.floor(Math.random() * Foods.length)]
      while (currentFoodList.includes(changeToFood) || newFoodList.includes(changeToFood))
        var changeToFood = Foods[Math.floor(Math.random() * Foods.length)]
      newFoodList.push(changeToFood)
  }
  for(var n = 1; n <= 4; n++)
    this.setState({['food'+n]: newFoodList[n-1]});
}

  render() {
    return (
      <div className='foodArea'>
        <button className='random-btn' onClick={this.randomizeFood}>Randomize</button>
      <div id="FoodSelection">
        <FoodSelect
          onFoodChange={this.onChange}
          id="1"
          name={this.state.food1.name}
          type={this.state.food1.type}
          source={this.state.food1.source}
        />
        <FoodSelect
          onFoodChange={this.onChange}
          id="2"
          name={this.state.food2.name}
          type={this.state.food2.type}
          source={this.state.food2.source}
        />
        <FoodSelect
          onFoodChange={this.onChange}
          id="3"
          name={this.state.food3.name}
          type={this.state.food3.type}
          source={this.state.food3.source}
        />
        <FoodSelect
          onFoodChange={this.onChange}
          id="4"
          name={this.state.food4.name}
          type={this.state.food4.type}
          source={this.state.food4.source}
        />
      </div>
      </div>

    );
  }
}

export default FoodBox;

function FoodSelect({ onFoodChange, id, name, source, type}){

  const [stomachList, updateStomachList] = useStore(StomachListStore)

  function changeFood(){
    updateStomachList({type: "add", payload: name})
    onFoodChange(id);
  };


  return (
      <div className="food-card" onClick={changeFood}>
        <img src={source} />
        <h2>{name}</h2>
      </div>
    );
}
