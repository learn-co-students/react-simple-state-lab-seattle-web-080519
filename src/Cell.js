import React, { Component } from 'react';
export default class Matrix extends Component {
    constructor (props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }
    iGuessAFunction = () => {
        this.setState({color: "#333"})
    }
    render () {
        return <div className="cell" onClick={this.iGuessAFunction} style={{backgroundColor: this.state.color}}> hello </div>
    }
}