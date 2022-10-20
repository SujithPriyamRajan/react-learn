import React, { Component } from 'react'

export class RenderProps2 extends Component {
    // constructor(props) {
    //         super(props)
          
    //         this.state = {
    //            count :0
    //         }                    
    //       }
    //       EventClick =() =>{//Here EventClick has the same functionally of Click Counter event 
    //         //WHERE HERE omMouseOver event is used
    //           this.setState(prevstate =>{
    //               return {count : prevstate.count + 1}
    //           })
    //       }
      
  render() { 
    //const {count} = this.state Local TO THIS
    const {count ,EventClick} = this.props
    return (
      <div>
        <h3>{this.props.render(true)}</h3>
        Hover Counter
        <h3 onMouseOver={EventClick}>Hover {count} Counter</h3>
        </div>
    )
  }
}

export default RenderProps2