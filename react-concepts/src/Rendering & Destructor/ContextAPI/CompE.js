import React from 'react'
import CompF from './CompF'

export default function CompE() {

 // static contextType = UserContext **BUT only works in the class comp
  return (
    <div>CompE 
        {/* {this.contextType}  to access the context from API to directly to the Comp E which will reflect the values included inside the ContextAPI Element or these pass the default values passed as 
        first Parameter in createContext('Default Value')  */} 
        <CompF />
        </div>
  )
}
//THere is an other way to do the Context values by
//CompE.contextType = UserContext