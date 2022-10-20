import React from "react";



// Where 
// const newComponents = higher Order Component (Original or existing Component)
// const EnhanceComponent = higherOrderComponent(Original or existing Component)

// Here 
// UpdateComponent = OriginalComponent =>{}
// return the NewComponents { --with the props of the count and events --} to UpdateComponent
// and export UpdateComponent

// thus in HOC_1_clickCounter and HOC_2_hoverCounter the last export are UpdateComponent(OriginalComponent)

//this prove the Higher Order Component  where Two Components uses the props of the New Components

//Nameing Convention   
//  UpdateComponent ->> withCounter the name export should be same as the file name
//              OriginalComponent --> WrapperComponent 
export const UpdateComponent = OriginalComponent =>{
    class NewComponents extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count :0
            }
          }
          EventClick =() =>{//Here EventClick has the same functionally of Click Counter event 
            //WHERE HERE omMouseOver event is used
              this.setState(prevstate =>{
                  return {count : prevstate.count + 1}
              })
          }
      
        render(){
            console.log(this.props.car+'From withCounter')
            return <OriginalComponent /*name ='Bash'*/ count={this.state.count}  EventClick={this.EventClick}/>
        }
    }
    return NewComponents
}