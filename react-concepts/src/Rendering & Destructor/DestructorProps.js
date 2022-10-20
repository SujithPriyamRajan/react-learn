
import React from 'react'

//destructors props of function competent


//ONE of destructors the props

// //Destructor Props by adding them into {} in the arrow function arg()
// const DestructorProps =({user ,Author}) => {
//   return (
//     <div>
//             <h5>DestructorProps</h5>
//             <h6>User: {user} ,Author :{Author} </h6>
//             </div>
//   )
// }

//Second way is by adding them into function body as const {props name} =props
const DestructorProps =props =>
{
    const {user,Author} =props
    return (
            <div>
                    <h5>DestructorProps in function Component</h5>
                    <h6>User: {user} ,Author :{Author} </h6>
                    </div>
          )
}

export default DestructorProps