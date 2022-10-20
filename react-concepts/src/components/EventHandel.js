
import React from 'react'

export function EventHandel() 
{
    function clickHandler()
    {
        console.log('Button clicked')
    }
  return (
    <div>
        <h6>Event Handling of Function comp</h6>
        <button onClick={clickHandler}>Click Here !</button>{/* if () is added in to the onclick fuction it becomes a function caller but we want work on event of clicking */}
                            {/* don't ADD parenthesis *()* TO THE EVENT HANDLER*/}
    </div>
  )

}