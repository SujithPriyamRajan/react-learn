//the tree of components are able to pass down the props from one to many so that many component render them without using them

//THUS the Context is used it helps to pass down he data through the component tree without having to pass props down manually at entry level

//THERE APP COMPONENT (MAIN)

//pass the props to A Component using simple props sharing 

//NOW D comp inheriting the props from App Comp throught B comp which is handled by refs

//F the last most comp wants the props from the App Which has E & C in tree there CONTEXT API Comes to picture

//for that we Create a comp for only for the rendering the props 
//userContext.js here we have the context create context API by 

// const UserContext = React.createContext()

// and passing them to other const userProvider = UserContext.userProvider
//                         &  const userConsumer = UserContext.userConsumer


//export {userprovider,userConsumer}

import React from 'react'

const UserContext = React.createContext() //Use to create context() for default value ('Default value') passed as first parameter 

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider , UserConsumer}

//export default UserContext (**this is used to export the context values directly from Context API to the required Component**)
