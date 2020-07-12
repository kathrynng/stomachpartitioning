import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import QuestionCard from './components/Questions'
import FoodBox from './components/FoodBox'

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Start}/>
      <Route path="/eat" component={FoodBox}/>
    </div>
    </Router>
  );
}

export default App;

function Start(){
  return(
    <div id="startPart">
      <h1>Stomach Partitioning</h1>
      <h2>How much can you eat?</h2>
      <Link to="/eat"><button className="start-btn">Start</button></Link>
    </div>
  )
}