

//SINCE Counter the values are same in both function
//RenderProps & RenderProps2

import React, { Component } from 'react'

export default class RP_Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count :0
        }
      }
      EventClick =() =>{
          this.setState(prevstate =>{
              return {count : prevstate.count + 1}
          })
      }
  render() {
   
    return (
      <div>
      {this.props.render(this.state.count,this.EventClick)}
      </div>
    )
  }
}
