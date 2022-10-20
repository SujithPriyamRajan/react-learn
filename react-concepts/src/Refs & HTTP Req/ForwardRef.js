import React from 'react'

// function ForwardRef() {
//   return (
//     <div>
//         <h5>Forwarding Ref From Child</h5>
//         <input type='text'/>
//     </div>
//   )
// }
const ForwardRef = React.forwardRef((props ,ref) =>{
    return (
        <div>
            <h5>Forwarding Ref From Child</h5>
            <input type='text' ref={ref}/>
        </div>
      )
})

export default ForwardRef