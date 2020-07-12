import React, { Component } from 'react';

import Foods from './images'

class FoodBox extends Component {
    render() { 
        return (
            <FoodSelect source={Foods[2]}/>
        );
    }
}
 
export default FoodBox;

class FoodSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            name: ''
        }
        
    }

    getTypeName = () => {
        var typeFood, nameFood = ''
        var getSource = this.props.source.split(new RegExp("[/\.]",'g'))

        var sourceTypeName = getSource[3].split("_")
        
        console.log(sourceTypeName)
        for(var n in sourceTypeName){
            if (sourceTypeName[n] == "sweets" || n == "food")
                typeFood = sourceTypeName[n]
            else {
                nameFood += sourceTypeName[n] + ' '
            }
        }

        this.setState({
            type: typeFood,
            name: nameFood
        })
    
    }

    render() {
        return (
            <div className="food-card" onClick={this.getTypeName}>
                <img src={this.props.source}/>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}