import React from 'react'
function EmployeeDetails({EmployeeDetail}) {
  return (
    <div>
        
        <ul>
        <li>My Name :{EmployeeDetail.Ename} ,
        Age : {EmployeeDetail.age} ,
        Skill : {EmployeeDetail.Skill}</li>
        </ul>
        </div>
  )
}

export default EmployeeDetails