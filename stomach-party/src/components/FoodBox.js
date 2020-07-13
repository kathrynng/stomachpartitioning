import React, { Component } from 'react';

import Foods from './images'

class FoodBox extends Component {

    handleChangeFood = (event) => {
        console.log(this.props.source)
    }

    render() { 
        return (
            <div id="FoodSelection">
                <FoodSelect onChange={this.handleChangeFood} source={Foods[0]}/>
                <FoodSelect onChange={this.handleChangeFood} source={Foods[1]}/>
                <FoodSelect onChange={this.handleChangeFood} source={Foods[2]}/>
                <FoodSelect onChange={this.handleChangeFood} source={Foods[3]}/>
            </div>
        );
    }
}
 
export default FoodBox;

class FoodSelect extends Component {
    constructor(props) {
        super(props);

        var typeFood, nameFood = ''
        var getSource = this.props.source.split(new RegExp("[/\.]",'g'))

        var sourceTypeName = getSource[3].split("_")
        
        for(var n in sourceTypeName){
            if (sourceTypeName[n] == "sweets" ||sourceTypeName[n] == "food")
                typeFood = sourceTypeName[n]
            else {
                nameFood += sourceTypeName[n] + ' '
            }
        }

        this.state = {
            type: typeFood,
            name: nameFood
        }    
    }

    changeFood = (event) =>{
        this.props.onChange(event.target)
    }

    render() {
        return (
            <div className="food-card" onClick={this.changeFood}>
                <img src={this.props.source}/>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}