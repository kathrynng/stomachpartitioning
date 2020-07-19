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

  render() {
    return (
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
    );
  }
}

export default FoodBox;

 //Hook to interact with Stomach.js
// export const stomachState = {
//     state: {},
//     setState(x){
//       this.state = x
//       this.updates.forEach(updates => updates(this.state))
//     },
//     updates: []
//   }

// stomachState.setState = stomachState.setState.bind(stomachState)

// export function useStomachState(){
//   const [state, setStomachState] = useState(stomachState.state)

//   if (!stomachState.updates.includes(setStomachState)){
//     stomachState.updates.push(setStomachState)
//   }

//   useEffect(() => {
//     return () => {
//       stomachState.updates = stomachState.updates.filter(updates => updates !== setStomachState)
//     }
//   }, [])

//   return [state, stomachState.setState]
// }

function FoodSelect({ onFoodChange, id, name, source, type}){

  const [stomachList, updateStomachList] = useStore(StomachListStore)

  function changeFood(){
    console.log(typeof stomachList)
    updateStomachList({type: "add", payload: name})
    console.log(stomachList)

    onFoodChange(id);
  };

  return (
      <div className="food-card" onClick={changeFood}>
        <img src={source} />
        <h2>{name}</h2>
      </div>
    );
}
