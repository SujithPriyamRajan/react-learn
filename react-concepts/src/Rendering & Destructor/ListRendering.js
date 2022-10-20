
import React from 'react'

import EmployeeDetails from './EmployeeDetails'

export default function ListRendering() {
  const name =['John','Alex','Harry']
  const nameList =[name.map(name =><li>{name}</li>)]
  const EmployeeDetail =[
    {
      Ename:'John',
      age:23,
      Skill:'React'
    },
    {
      Ename :'Alex',             
      age:54,
      Skill:'Angular'
    },
    {
      Ename:'Harry',
      age:34,
      Skill:'Vue'
    }
  ]
  const disp =EmployeeDetail.map(EmployeeDetail => <EmployeeDetails EmployeeDetail ={EmployeeDetail} />)
  return (
    <div>
      <h1>List Rendering</h1>
      <ul>
        {/* <li>{name[0]}</li>
        <li>{name[1]}</li>        can NOT do for each index
        <li>{name[2]}</li> */}

        {//--to execute java script code 

        //map method is arrayname.map(Arrow function =>HTML Element{body of the arrow})
         // name.map(name => <li>{name}</li>
        }

        {/* Used in the prised way of storing in a const & let the arrow function in map does the rest */}
        {nameList}
        {/* {EmployeeDetail.map(EmployeeDetail =><li>My Name :{EmployeeDetail.Ename} Age : {EmployeeDetail.age} Skill : {EmployeeDetail.Skill}</li>)
        } */}
        <br></br>
        {disp}
      </ul>
      
    </div>
  )
}
