import React from 'react'
import { UserConsumer } from './ContextAPI_1'

export default function CompF() {
  return (
    <UserConsumer>
            {
                (value) =>{
                   return  <div>{value}</div>//return statement should always have a JSX Inside it
                }
            }
    </UserConsumer>
  )
}
