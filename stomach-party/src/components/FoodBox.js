import React, { Component } from "react";

import Foods from "./images";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food1: Foods[0],
      food2: Foods[1],
      food3: Foods[2],
      food4: Foods[3],
    };
    this.onChange = this.onChange.bind(this);
    
  }

  onChange = (value) => {
    var currentFoodList = [this.state.food1, this.state.food2, this.state.food3, this.state.food4]
      var changeToFood = Foods[Math.floor(Math.random() * Foods.length)]
      while (currentFoodList.includes(changeToFood)) changeToFood = Foods[Math.floor(Math.random() * Foods.length)]
    switch (value) {
      case '1':
        this.setState({food1: changeToFood});
        break
      case '2':
        this.setState({food2: changeToFood});
        break
      case '3':
        this.setState({food3: changeToFood});
        break
      case '4':
        this.setState({food4: changeToFood});
        break
    }
  };

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

class FoodSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
        type: this.props.type
        
    }

  }

  changeFood = () => {
    this.props.onFoodChange(this.props.id);
  };

  render() {
    return (
      <div className="food-card" onClick={this.changeFood}>
        <img src={this.props.source} />
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}
