
import React, { Component } from 'react'

export default class CounterIncrement extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Count : 0
      }
    }
    CounterIncrement = () =>
    {
        this.setState({
            Count : this.state.Count + 1
        })
    }
    render() {
    return (
      <div>
       <h1> without Hooks in Class Component </h1>
       <button onClick={this.CounterIncrement}>Increment</button>
       <h5>Count = {this.state.Count}</h5>
       </div>
    )
  }
}
