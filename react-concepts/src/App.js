
import './App.css';
//import Welcome from './components/Welcome'
//Welcome is the same elements used in tag

import  { Welcome1 } from './components/Welcome'// always import them 
import  { Welcome } from './components/Welcome'
import Happy from './components/Happy';
//direct import function statements {}
//if default export are not used better import them by function name

//State Component
import { Message } from './components/Message';

//setstate() Component
import Counter from './components/Counter';

//Destructor Props in function Comp
//import DestructorProps from './components/DestructorProps';

//Destructor Props in class comp
//import DestructorPropsCF from './components/DestructorPropsCF';

//Event handling by Function Comp ONCLICK EVENT
import {EventHandel} from './components/EventHandel';

//Event handling by Class Comp ONCLICK EVENT
import { EventHandelCF } from './components/EventHandelCF';

//Event Banding by Class Comp ONCLICK EVENT
import EventBinding from './components/EventBinding';

//Parent Props To the Parent Component
import ParentComp from './components/ParentComp';

//Conditional Statement in render(),element ,turnery,short Circuit
//import UserWelcome from './components/UserWelcome';

//List Rendering 
//import ListRendering from './components/ListRendering';
function App() {
  return (
    <div className="App">
<hr></hr>
      <h1>Learn React !!</h1>
<hr></hr>
       <Welcome className="John" role='manager'> {/* Function Comp*/}
       <h2>John is our  Developer</h2>
       <button type="submit" value="info"><a href=''>Info</a></button>
       </Welcome>
 <hr></hr>
      <Welcome className="Alex" role="Trainee" >
        <img alt='Logo'>
        </img>
        <h2>Training Program</h2>
        <button type="submit" value="info" >Info</button>
      </Welcome>
<hr></hr>
      <Welcome className="Rose" role='Team Lead'>
        <h2>Our Team Lead</h2>
      <button type="submit" value="info"><a href=''>Info</a></button>
      <div>Happy to work on react</div> 
      </Welcome> 
<hr></hr>
      <Welcome1 company='Estuate'/> {/*Arrow Function Comp */}
<hr></hr>
      <Happy emoji='smile'>
          <div>Happy to work on react</div>   {/*CLASS Comp */}
        </Happy> 
<hr></hr>
        <Message /> {/* State Comp */}
<hr></hr>
         <Counter />         {/*setState() Comp */}
{/* <hr></hr>
        <DestructorProps user="CJ Mick" Author='Harry'/>    {/*Props destructors in function comp*/}
{/*<hr></hr>
        <DestructorPropsCF car='benz' owner='Johnny'/>  {/*Props destructors in class comp*/}
<hr></hr>
        <EventHandel /> {/*Event Handling of the function*/}
 <hr></hr>
         <EventHandelCF /> {/*Event Handling of the class */}
  <hr></hr>
        <EventBinding /> {/*Event banding of the class*/}
<hr></hr>
        <ParentComp /> {/*Parent Comp of the Props as Method
{/*<hr></hr>     
         <UserWelcome />  {/* Conditional statements inside render() */}
    </div>
  );
}
export default App;
