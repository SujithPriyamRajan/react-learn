import React from "react";
import { useState } from "react";

//RFCE To function 

function FullCounter() {

    const initial_Values = 0
    const [count ,CounterIncrement] =useState(initial_Values)
    const Incrementby5 =() =>{
        for(let i = 0;i<5;i++){CounterIncrement(BeforeCount => BeforeCount + 1)}
    }
    const Decrementby5 =() =>{
      for(let i = 0;i<5;i++){CounterIncrement(BeforeCount => BeforeCount - 1)}
  }
   
  return (
    <div>
        <h1>FullCounter</h1>
        <h5>Count ={count}</h5>
        <button onClick={() =>{CounterIncrement(BeforeCount => BeforeCount +1)}}>Increment</button>
        <button onClick={() =>{CounterIncrement(initial_Values)}}>Reset</button>
        <button onClick={()=>{CounterIncrement(BeforeCount => BeforeCount -1)}}>Decrement</button>
        <button onClick={Incrementby5}>Increment by 5</button>
        <button onClick={Decrementby5}>Decrement by 5</button>
        
        </div>
  )
}

export default FullCounter