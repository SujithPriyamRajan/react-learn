//CONDTIONAL RENDERING 


// conditional statement inside render()
// Condtional rendering are of type
// 1.IF /else rendering inside render() of the return type
// 2.declaring the variable or the element inside the render()
// 3.ternary Condtional Operator
// 4.Short circuit Operator

import React, { Component } from 'react'

export default class UserWelcome extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        LoggedIn: true
     }
   } 
  render()
   {
    // ***IF Statements doesn't work inside the return Statement
    // JSX is mainly used for function call and object construction 
    // if(this.state.LoggedIn)
    // {

    //     return <div>
    //         <h5>Conditional From render()</h5>
    //     Welcome John
    // </div>
    // }
    // else{
    //     return<div>
    //          <h5>Conditional From render()</h5>
    //     Welcome Guest
    // </div>
    // } 


    // ***Element variable is storing the var element in a javascript 
    // let message 
    // if(this.state.LoggedIn)
    // {
    //     message = <div>Welcome John</div>
    // }
    // else (this.state.LoggedIn)
    // {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    //***Ternary Conditional Operator Simple And*/
    //   return(
    //     this.state.LoggedIn ? <div>Welcome John</div> : <div>Welcome Guest</div>
    //   )

      // Short Circuits
      return(this.state.LoggedIn && <div> Welcome John</div>)
        // return (
        //     <div>
        //             <div>
        //                 Welcome Guest
        //             </div>                 ***  NORMAL WAY
        //             <div>
        //                 Welcome John
        //             </div>
        //     </div>
        // )
    
  }
}
