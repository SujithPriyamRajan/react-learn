import React from 'react'

function Fragments() {
  return (
   <React.Fragment> 
        <h1>Fragments</h1>
        <React.Fragment>
        <p>check Console Where every html element like h1 , p , are grouped into a div Fragment 
            this is where React.Fragment comes into picture 
            where it helps to divide them into Fragment of element or tags
        </p>
        </React.Fragment>
    </React.Fragment>
  )
}

export default Fragments