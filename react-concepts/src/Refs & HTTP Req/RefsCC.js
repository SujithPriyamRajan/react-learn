import React, { Component } from 'react'

class RefsCC extends Component {
    constructor(props) {
      super(props)
    this.inputRefs = React.createRef() 
    }

    InputFocus(){
        this.inputRefs.current.focus()
    }
  render() {
    return (
      <div>
        <h5>Child Component Refs Without componentDidMount</h5>
        <input type='text' ref={this.inputRefs}/>
        </div>
    )
  }
}

export default RefsCC