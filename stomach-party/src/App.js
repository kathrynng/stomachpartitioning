import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import QuestionCard from "./components/Questions";
import FoodBox from "./components/FoodBox";
import StomachList, { ChooseStomachSize } from "./components/Stomach";

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
        <div className="main">
          <div className="mainArea">
            {this.state.startGame ? (
              <FoodToStomach />
            ) : (
              <Start onChange={this.handleStart} />
            )}
          </div>
        </div>
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
  state = {
    selectedSize: false,
  };
  selectedSize = (event) => {
    this.setState({
      selectedSize: true,
    });
  };
  render() {
    return (
      <div>
        {this.state.selectedSize ? (
          <div id="foodtostomach">
            <FoodBox />
            <StomachList />
          </div>
        ) : (
          <div id="stomachSize">
            <ChooseStomachSize onChange={this.selectedSize} />
          </div>
        )}
      </div>
    );
  }
}
