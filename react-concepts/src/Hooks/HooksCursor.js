//UseEffect componentDidMount The component from here 
//to the next unmounting the component 
import React from 'react'
import { useState ,useEffect}  from 'react'
function HooksCursor() {
    const [x , setXvalue] = useState(0)
    const [y , setYvalue] = useState(0)

    const logMousePointer = event =>{
        console.log('Moues Event Trigger')
        setXvalue(event.clientX)
        setYvalue(event.clientY)
    }
    useEffect(()=>{
        console.log('Use Effect called')
        window.addEventListener('mousemove', logMousePointer)

        return () =>{//To cleanup the comp return them from the useeffect code with remove event listiner
            console.log('Component Unmounting')
        window.removeEventListener('mousemove',logMousePointer)}
    },[])//We can pass empty array to componentDidMount function the usage on the useEffect 
  return (
    <div>
        <h1>useEffect by Cursor</h1>
        <b><i>Values X = {x}, Values Y = {y}</i></b>
        </div>
  )
}

export default HooksCursor