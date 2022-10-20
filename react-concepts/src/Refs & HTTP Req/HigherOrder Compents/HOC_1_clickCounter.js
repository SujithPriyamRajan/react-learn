import React, { Component } from 'react'
// Higher Order Component is a Components where the Other New 
// Component use the older or exsisting Component for the 
// same functionality and return the new Component


import { UpdateComponent } from './HOC_2_WithCounter'

class HOC_1_clickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count :0                      ****TO AVOID the duplication of code 
    //                            the withcounter passes the functionally of the code as props 
              //                THUS THE CODE HAS INCLUDED AS A PROPS
    //   }
    //   }
    // }
    // EventClick =() =>{ //HERE EVent Click is Counter with a Onclick event
    //     this.setState(prevstate =>{
    //         return {count : prevstate.count + 1}
    //     })
    // }
  render() {
   // const {count} = this.state
   const {count , EventClick} = this.props
    return (
      <div>
        HOC_1_clickCounter<br></br>
        {/* {this.props.car} +From HOC_1_clickCounter 
        this is because of the props from this component are not able to access with the with counter component */} 
        <button onClick={EventClick}>Clicked {count} times</button>
        {/* <h3>{this.props.name} Form parent HOC_2_WithCounter passed as a props</h3> */}
        <br></br>
        </div>
    )
  }
}
export default UpdateComponent(HOC_1_clickCounter)
