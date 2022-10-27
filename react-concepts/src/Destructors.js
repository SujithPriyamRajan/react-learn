import React from 'react'
import './Destructors.css'

// Condtional rendering
import UserWelcome from './Rendering & Destructor/UserWelcome'

//destructors props of function competent
import DestructorProps from './Rendering & Destructor/DestructorProps'

//destructors props of class competent
import DestructorPropsCF from './Rendering & Destructor/DestructorPropsCF'

//List Rendering 
import ListRendering from './Rendering & Destructor/ListRendering'

//Rendering props
// import RenderProps from './Rendering & Destructor/Render Props Partten/RenderProps'
// import RenderProps2 from './Rendering & Destructor/Render Props Partten/RenderProps2'
// import RP_Counter from './Rendering & Destructor/Render Props Partten/RP_Counter'

//Context API 
// import CompC from './Rendering & Destructor/ContextAPI/CompC'
// import { UserProvider } from './Rendering & Destructor/ContextAPI/ContextAPI_1'


//HTTP GET & POST
import HTTP_Req_Intro from './Rendering & Destructor/HTTP Request/HTTP_Req_Intro'
import HTTP_REQ_POST from './Rendering & Destructor/HTTP Request/HTTP_REQ_POST'


export default function Destructor() {
    return (
      <div>
          <h1>Destructor & Rendering </h1>
          <hr></hr>
          <UserWelcome />
          <hr></hr>
          <DestructorProps user="CJ Mick" Author='Harry'/>
          <hr></hr>
          <DestructorPropsCF car='benz' owner='Johnny'/>
          <hr></hr>
          <ListRendering />
          {/* <hr></hr>
          <RenderProps />
          <hr></hr>

           {/* IN Props can be a value or a Arrow function  
          <RenderProps2 render={(loggin)=>loggin?'John': 'Guest'}/> */}
          <hr></hr>

          {/* RENDERING PROPS INSIDE THE render value or any other name it does not affect the render method */}
          {/* <RP_Counter render={(count , EventClick)=>{<RenderProps count ={count} EventClick ={EventClick}/>}}/>
          <RP_Counter render={(count , EventClick)=>{<RenderProps2 count ={count} EventClick ={EventClick}/>}}/> */}
     

     {/* Context API is used to wrap the props or state inside the one element so that a every child component can have access and we can use when ever we can asscess */}
            {/* <UserProvider value='Context to F Comp'>
          <CompC />
          </UserProvider> */}
            <hr></hr>
            <HTTP_Req_Intro />
            <hr></hr>
            <HTTP_REQ_POST/>
     </div>
    )
  }