

import React, { Component } from 'react'

export default class CourserValues extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      x : 0,
      y : 0
       }
    }
    logMousePosition = e => {
        this.setState({ x : e.screenX , y : e.screenY })
    }
    componentDidMount(){
      window.addEventListener('mousemove',this.logMousePosition)
    }
    render() {
    return (
      <div>
        <h1>Mouse Values</h1> 
        <b>X - {this.state.x} & Y - {this.state.y}</b>
        </div>
    )
  }
}
