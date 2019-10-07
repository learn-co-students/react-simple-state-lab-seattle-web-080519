import React, { Component } from 'react';

export default class Cell extends Component {
    // Define a constructor method in Cell:
    constructor(props) {
        // Remember to call super() on the first line of the constructor:
        super(props)
        // sets an initial state key of color to the value prop which is passed from its parent component:
        this.state = {
            color: this.props.value
        }
    }
    // Create a click listener which, when activated, updates the state to the following hex value: '#333':
    clickEvent = () => {
        this.setState({
            color: '#333'
        })
    }
// should render a single <div> with a className of cell
    // In render, the cell should set the background color in-line for the <div> by adding the following attribute: style={{backgroundColor: '#FFF'}} ('#FFF' is just used as an example value here - the value should be state's color):
    render() {
        return (
            <div
                className="cell"
                style={{backgroundColor: this.state.color}}
                onClick={this.clickEvent} >
            </div>
        )
    }
}