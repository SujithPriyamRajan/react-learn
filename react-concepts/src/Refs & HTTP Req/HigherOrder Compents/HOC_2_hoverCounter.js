import React, { Component } from 'react'

//Higher Order Component is a Components where the Other New 
// Component use the older or exsisting Component for the 
// same functionality and return the new Component

import { UpdateComponent } from './HOC_2_WithCounter'

class HOC_2_hoverCounter extends Component {
    
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count :0
    //     }                      ****TO AVOID the duplication of code 
    //                            the withcounter passes the functionalliy of the code as props 
              //                THUS THE CODE HAS INCLUDED AS A PROPS
    //   }
    //   EventClick =() =>{//Here EventClick has the same functionally of Click Counter event 
    //     //WHERE HERE omMouseOver event is used
    //       this.setState(prevstate =>{
    //           return {count : prevstate.count + 1}
    //       })
    //   }
  
    render() {
       // const {count} = this.state
       const {count , EventClick} = this.props
    return (
      <div>
        HOC_2_hoverCounter
        <h3 onMouseOver={EventClick}>Hover {count} Counter</h3>
        {/* <h3>{this.props.name} Form parent HOC_2_WithCounter passed as a props</h3> */}
        </div>
    )
  }
}
export default UpdateComponent(HOC_2_hoverCounter)
