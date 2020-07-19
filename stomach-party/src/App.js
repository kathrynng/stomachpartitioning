import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import QuestionCard from "./components/Questions";
import FoodBox from "./components/FoodBox";
import StomachList from "./components/Stomach"

class App extends Component {
  state = {
    startGame: false,
  };

  handleStart = (event) => {
    this.setState({
      startGame: true,
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.startGame ? (
          <FoodToStomach/>
        ) : (
          <Start onChange={this.handleStart} />
        )}
      </div>
    );
  }
}

export default App;

class Start extends Component {
  startParty = (event) => {
    this.props.onChange(event.target);
  };
  render() {
    return (
      <div id="startPart">
        <h1>Stomach Partitioning</h1>
        <h2>How much can you eat?</h2>
        <button className="start-btn" onClick={this.startParty}>
          Start
        </button>
      </div>
    );
  }
}

class FoodToStomach extends Component {
  render() { 
    return (
      <div id="foodtostomach">
        <FoodBox/>
        <StomachList/>
      </div>
    );
  }
}