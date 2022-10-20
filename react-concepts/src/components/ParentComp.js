import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Father '
      }
      this.greetFather = this.greetFather.bind(this)
    }
    greetFather(fromChild)
    {
      //  alert('Hello '+this.state.parentName) after ES6 We can concat without + symbol

      alert(`Hello ${this.state.parentName} from : ${fromChild}`)//concat in single line template literals `String ${this state Direct parent}`
    }

    render() {
    return (
    <div> 
        <h6>Parent Component</h6>
        <ChildComp greetParent={this.greetFather}/>
        </div>
        )
    //   <div>
    //    <h5>Parent Component</h5> 
    //         <h6>{this.state.greetFather}</h6>
    //     </div>
    
  }
}
