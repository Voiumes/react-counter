import React, { Component } from 'react'


export default class Counter extends Component {
    state = { 
        count:0
    };
    formatCount(){
        const {count} = this.state;
        return count === 0 ?  "Zero" : count;
    }

    render() { 
        return(
        <React.Fragment>
            <span>{this.formatCount()}</span> <br></br>
            <button>Increment</button>
            <h1>
                hi
            </h1>
        </React.Fragment>
    )}
}