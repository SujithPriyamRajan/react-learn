import React ,{Component, useState} from "react";
import Hooks from "../Hooks";


function ArrayHooks() {
    const [item,newItem] = useState([])//usestate([]) to set an empty array

    const addItem = () =>{
        newItem([...item,{
            id: item.length,
            value : Math.floor(Math.random()*10)+1//to list a random number
        }])
    }
  return (
    <div>
        <h1>Array Hooks</h1>
        <button onClick={addItem}>Add Number</button>
        <ul>
            {item.map(item =>(
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
        </div>
  )
}

export default ArrayHooks

/* RULES

useState Hooks are use to add them in fuction Component

where in class setstate are Object 

Similarly useState they don't have objects in new state values depends on previous state always 
mention them in the args() of the setter method

onChange={event => FullName({...name ,LastName: event.target.value})}

when dealng with arrays objects make them spreads them (...)

useState ([]) for arrays set empty
useState (Element1 : "" Element2 : "") for objects set the elements to empty

*/
