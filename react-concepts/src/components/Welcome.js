
import React from "react";//MANDATORY

//FUNCTION COMPONENT
 export function Welcome(props)
 {
    
      return (
          <div>
      <h1>Hello {props.className} {props.role}</h1>
      <h6>(function Component)</h6>
      {props.imgsrc}
      {props.children} 
      {props.h2}
      {props.h1}
      </div>
      )
 }
//Props are immutable once the values are hardcoded they cant be changed 
export const Welcome1  = props =><div> 
     <h1>Our Company {props.company}</h1>
     <h2><a href="">Abouts Us</a></h2>
     </div>



//export default Welcome  //MANDATORY
//either by individual or by default

//if default export are not used better import them by function name
