import React from "react";
//1.Import SetState() 
import { useState } from "react";


export default function CounterIncrementFun() {
    //Using the array destructuring  [initial values , operated values] = usestate(initial value)
  const [count ,CounterIncrement] = useState(0)
    return (
    <div>
        <h1> UseState Hooks by Function Components</h1>
{/* Uses the Arrow function inside the onclick event */}
        <button onClick={() => CounterIncrement(count + 1)}>Increment</button>
        <h5> Count ={count}</h5>
        </div>
  )
}
/* Rules of using hook 
* Use them at the top level(from the  const objects) not inside a control statements or loops
* Use them on only in react functions*/