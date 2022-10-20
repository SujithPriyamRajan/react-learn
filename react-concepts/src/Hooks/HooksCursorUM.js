import React ,{useState}from 'react'
import HooksCursor from './HooksCursor'
function HooksCursorUM() {
    const [display , setDisplay] = useState(true)

  return (
    <div>
        <h3>Use Effect Cursor Unmounting</h3>
        <button onClick={() => setDisplay(!display)}>Toggle display </button>
        <p>After clicking Toggle the component from HooksCursor is removed </p>
        {display && <HooksCursor />}
        
        </div>
  )
}

export default HooksCursorUM