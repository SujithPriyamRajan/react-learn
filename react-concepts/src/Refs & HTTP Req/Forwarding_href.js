import React, { Component } from 'react'
import ForwardRef from './ForwardRef'

export default class Forwarding_href extends Component {
  constructor(props) {
    super(props)
  
      this.ParentRef = React.createRef()
  }
  clickHandler = () =>{
        this.ParentRef.current.focus()
  }
  render() {
    return (
      <div>
        <h4>Forwarding Ref from Parent</h4>
        <ForwardRef ref ={this.ParentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
        </div>
    )
  }
}
