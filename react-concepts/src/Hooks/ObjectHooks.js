import React from "react";
import { useState } from "react";


function ObjectHooks() {
  const [name ,FullName] =  useState({FirstName : '',LastName : ''})
    return (
        <form>
            <input type='text'
            value={name.FirstName}//spread operator (...) allows us to quickly 
            //copy all or part of an existing array or object into another array or object.
            onChange={event => FullName({... name,FirstName: event.target.value})}/>
             <input type='text'
            value={name.LastName}
            onChange={event => FullName({...name ,LastName: event.target.value})}/>
        
        <h1>Object Hooks</h1>
        <h5>Hello {name.FirstName} {name.LastName}</h5>
        <h2>{JSON.stringify(name)} </h2>
        {/* JSON.stringify() Helps to the object or array elements  */}
   </form>
  )
}

export default ObjectHooks