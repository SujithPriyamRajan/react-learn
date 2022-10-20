import React, { Component } from 'react'

import RefsCC from './RefsCC'
export default class Parent_of_RefsCC extends Component {
    constructor(props) {
      super(props)
    
        this.compRef = React.createRef()
    }
    clickHandler =()=>{this.compRef.current.InputFocus()}
  render() {
    return (
      <div>
        <RefsCC ref={this.compRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
        <br></br>Parent of refs Class 
        </div>
    )
  }
}
