import React, { Component } from "react";
import StomachImg from './images/stomach.png';
import "./App.css";

import {useStore} from 'react-hookstore'

import QuestionCard from "./components/Questions";
import FoodBox from "./components/FoodBox";
import StomachList, { ChooseStomachSize, StomachListStore } from "./components/Stomach";

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
        <img src={StomachImg}/>
        <h1>Stomach Partitioning</h1>
        <h2>How much can you eat?</h2>
        <button className="start-btn" onClick={this.startParty}>
          Start
        </button>
        <h2><a href="https://github.com/kathrynng/stomachpartitioning">By Kathryn Ng (GH Page)</a></h2>
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
  replay = (event) => {
    this.setState({
      selectedSize: false
    })
  }
  render() {
    return (
      <div>
        {this.state.selectedSize ? (
          <GameNResult onReplay={this.replay}/>
        ) : (
          <div id="stomachSize">
            <ChooseStomachSize onChange={this.selectedSize} />
          </div>
        )}
      </div>
    );
  }
}

function GameNResult({onReplay}){
  const [stomachList, updateStomachList] = useStore(StomachListStore)

  var fullStomach = stomachList.fullStomach

  function replayGame(event){
    updateStomachList({type:'reset'})
    onReplay(event.target)
  }

  if(fullStomach){
    return(
      <div>
        <h1>Congrats!</h1>
        <StomachList />
        <button className="start-btn" onClick={replayGame}>Replay</button>
        <h2><a href="https://github.com/kathrynng/stomachpartitioning">Visit GH Page</a></h2>

      </div>
    )
  }else{
    return(
      <div id="foodtostomach">
              <FoodBox />
              <StomachList />
            </div>
    )
    
  }
}