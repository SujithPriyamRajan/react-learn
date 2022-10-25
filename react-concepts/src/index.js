import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';

//import App from './App'; 

// For Class & Function Components
// props & states
//   event Handling And Bainding
//   Communicating from child to parent




//import Hooks from './Hooks';


//UseStates Handling with class & function 
//UseEffect Handling with class & functions
//Along with component Did mounting & Component unmounting
//using UseState with Objects & Arrays 

import Destructor from './Destructors';

//destructors props of function competent
//destructors props of class competent
//List Rendering
//Conditional Rendering

//import ListandKeys from './List&Keys';

//List & keys 
//Form Handleing
//Life Cycle Of Method
//Css Style Sheet
//Inline Css
//Fragments
//Pure Components
//memo

//import RefsandHTTP from './RefsandHTTP';

//Refs
//Refs with Class comp
//forwarding refs
//portals
//Error Boundary
//HIgher Order Component
//HTTP REQUEST TO GET & POST


//MYSQL connect in differents

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />    */}

    {/* <Hooks /> */}

    <Destructor />
    
    {/* <ListandKeys /> */}

    {/* <RefsandHTTP /> */}

   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
