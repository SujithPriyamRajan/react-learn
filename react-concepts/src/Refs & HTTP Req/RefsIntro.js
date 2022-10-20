import React, { Component } from 'react'

// Refs provide a way to access DOM nodes 
// or React elements created in the render method.


// When to Use Refs
// There are a few good use cases for refs:

// Managing focus, text selection, or media playback.
// Triggering imperative animations.
// Integrating with third-party DOM libraries.
// Avoid using refs for anything that can be done declaratively.


class RefsIntro extends Component {
    constructor(props) {
      super(props)
            this.inputRef = React.createRef()
           
            //ONE WAY TO CREATE REFS
            // Refs are created using React.createRef() and 
            // attached to React elements via the ref attribute 

            //CallBack Refs are use in where defining them as null and creating a arrow function and passing them to the other
            this.CBref = null
            this.setCBref = e =>{ this.CBref = e}
      }
      componentDidMount(){
      //  this.inputRef.current.focus()//TO focus on the input field 
      //where current help to focus() to point out the instance

       // console.log(this.inputRef)

       if(this.CBref){this.CBref.focus()}//Callback refs does not have the current pointer because is direct instance
       
      }
      clickHandler = () => {alert(this.inputRef.current.value)}
  render() {
    return (
      <div>
        <h1>Refs Intro</h1>
        <input type='text' ref={this.inputRef}/>
        <input type='text' ref={this.setCBref}/>
        <button onClick={this.clickHandler}>click </button>
        
        </div>
    )
  }
}
export default RefsIntro