
import React, { Component } from 'react'

//destructors props of class competent


//ONE of destructors the props is is by adding them into 
//function body as const {props name} =props


class DestructorPropsCF extends Component {
  render() {
    const {car,owner} = this.props
  //  const {state1,state2} =this.props for destructors states
    return (
      <div>
        <h6> Destructor Props Class Component</h6>
        <h6>Car :{car}, Owner: {owner}</h6>
        </div>
    )
  }
}
export default DestructorPropsCF