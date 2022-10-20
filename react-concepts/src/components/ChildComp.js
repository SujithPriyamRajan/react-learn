
//Props as Method
import React from 'react'
//rfce to have functional comp
function ChildComp(props) 
 { //props as method in the  Parent Comp which has a method           
  return (
    <div>
        <h6>Child Component</h6>
    <button onClick={ ()=> props.greetParent(' Son')}>Greet</button> 
    </div>
  )
}

export default ChildComp
