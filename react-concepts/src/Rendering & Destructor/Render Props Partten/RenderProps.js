import React, { Component } from 'react'

export default class 
RenderProps extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count :0
    //     }
    //   }
    //   EventClick =() =>{
    //       this.setState(prevstate =>{
    //           return {count : prevstate.count + 1}
    //       })
    //   }
  
  render() {
    //const {count} = this.state Local TO THIS
    const {count,EventClick} = this.props
    return (
      <div>
        <h2>Render Props</h2>
        <br></br>
        clickCounter
        <br></br>
        <button onClick={EventClick}>Clicked {count} times</button>
        <br></br> 
    </div>
    )
  }
}
