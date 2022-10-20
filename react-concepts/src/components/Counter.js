
import React, { Component } from 'react'

class Counter extends Component
 {
    constructor(props)
     {
      super(props)
    
      this.state = {
          count :0
      }
    }
    increment() 
    {
        //without using setstate() Method  use only on the the direct 
        //this.state is only in constructor
        // this.state.count = this.state.count + 1

        // this.setState
        // ({
        //       count : this.state.count + 1 
        // },
        // ()=>
        // {
        //     console.log("CallBack values :",this.state.count)
        // }) USING THE INCREMENT() FUNCTION 5 Times 

        this.setState(prevState => ({
                count : prevState.count + 1
            }))
            console.log(this.state.count)

    }
    incrementDouble()
    {
        this.increment() 
        this.increment() 
    }
  render()
   {
    return (

    <div>
        <h1>setState Comp </h1>
        <p>Count - {this.state.count}</p>
        <button onClick={() => this.increment()}>Increment by 1</button>
        <button onClick={() => this.incrementDouble()}>Increment by 2</button>
        </div>
    )
  }
}
export default Counter