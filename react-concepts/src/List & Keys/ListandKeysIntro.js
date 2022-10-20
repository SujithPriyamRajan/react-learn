import React from 'react'

/* 
Keys is special string attribute you need to include when creating a list of element

when To use index as key
1.item in your list do not have a unique id 
2.the list is a static list & will not change
3.the list will never be reorder or filtered
*/
function ListandKeysIntro() {
    const Company =['BMW','Benz','Audi']
    const CompanyList = Company.map((Company ,index) =><div key ={index}> Index {index} : {Company   }</div>)
  return (
    <div>
        <h1>List and Keys</h1>
        <li key='1'>BMW</li>
        <li key={2}>Benz</li>
        <li key='5'>Audi</li>
        <li key={4}>Honda</li>
        <li key={3}>Toyoto</li>
        <li>{CompanyList}</li>
        </div>
  )
}

export default ListandKeysIntro