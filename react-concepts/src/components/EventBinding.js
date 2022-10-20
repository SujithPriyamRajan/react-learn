
import React, { Component } from 'react'
//rcc shortcut for class snipper
class EventBinding extends Component {
    //rconst for the shortcut for the constructor
    constructor(props) {
      super(props)
    
      this.state = {
         message :'Hello User !!'
      }
      this.EventHandler =this.EventHandler.bind(this) //THIRD WAY
    }


    // EventHandler()  SECOND WAY
    // {
    //     this.setState({
    //         message : 'Hello John !!'
    //     })   //Direct set State methodBreak the app Can't read set state method

    //     //console.log(this) this is undefined  due to javascript not due to react
    // }


    EventHandler = () =>{
        this.setState({
                    message : 'Hello John !!'
                })
    }
  render() {
    return (
      <div>
        <h3>EventBinding</h3>
        <h5>{this.state.message}</h5>

        {/* <button onClick={this.EventHandler.bind(this)}>Login</button> */}
                                        {/**ONE way of blinding in render method */}

         {/* <button onClick={() => this.EventHandler()}>Login</button> */}
                                        {/* SECOND way is to binding in the arrow function 
                                        IN HERE Parenthesis () is required because of the return type */}

       {/* <button onClick={this.EventHandler}>Login</button> */}
                                            {/* THIRD WAY is to add them into the constructor */}
      
             <button onClick={this.EventHandler}>Login</button>
             {/* FOURTH WAY Add the in a arrow function */}
      </div>
    )
  }
}
export default EventBinding

