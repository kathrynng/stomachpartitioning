import React, { Component } from 'react';

import FoodBox from './FoodBox'

class StomachList extends Component {
    state = {
        item: ""
    }

    render() { 
        return (
            <ul>
                <li>Item 1</li>
            </ul>
        );
    }
}
 
export default StomachList;