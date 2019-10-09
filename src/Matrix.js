import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map((val, inx) => <Cell key ={val + inx} value={val} />)
  )
  
  genMatrix = () => (
    this.props.values.map((rowVals, index) => <div key={rowVals + index} className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  



}
Matrix.defaultProps = {
  values:   
  // () => {
  //   const filler = [ '#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00' ]
  //   return new Array(10).fill(filler) }
  [ [ '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00' ],
  [ '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00' ],
  [ '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00' ],
  [ '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00' ],
  [ '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00' ],
  [ '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00' ],
  [ '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00' ],
  [ '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00' ],
  [ '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00' ],
  [ '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00',
    '#F00' ] ]
}