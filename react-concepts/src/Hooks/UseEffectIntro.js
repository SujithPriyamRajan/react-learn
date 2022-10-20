//Use Effect Hooks are used to perform the functional components
//they are used to replacement for 
//componentDidMount, componentDidUpdate and componentWillUnmount

// import React, {Component} from "react"


// export default class UseEffectIntro extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }                      USING USEEFFECT () IN FUNCTION COMPONENT
//     }
//     componentDidMount(){
//         document.title = `Clicked ${this.state.count} times`
//     }
//     componentDidUpdate(prevProps,PrevState){
    // if(PrevState.count != this.state.count){
        //console.log('Updated ')
    //              document.title = `Clicked ${this.state.count} times`
    // }
//
//     }
//   render() {
//     return (
//       <div>
//        <h1> Use Effect </h1>
//        <button onClick={() =>this.setState({count : this.state.count + 1})}>Count = {this.state.count}</button>
//         </div>
//     )
//   }
// }
import React ,{useState , useEffect} from "react"

export default function UseEffectIntro() {
    const [count , AddCount] = useState(0)
    const [name,username] = useState('')
    //use Effect is used or called after every render() 
    useEffect(() =>{
        console.log(`UseEffect -Updated Document Text`)
        document.title = `Clicked ${count}` //"" - for string 
                                            //`` for a ${} String
    },[count])//in above class compents use if conditional statement where inside the render method itself
    //we use the second parameter useEffect(()=>{} -- Arrow function,[either props or state] -- as an array)
    //it will render () only when the changes are made
  return (
    <div>
        <h1>UseEffect</h1>
        <input type='text' value={name} onChange={Event  =>username(Event.target.value)}></input>
        <button onClick={() => AddCount(count + 1)}>Count ={count}</button>
 </div>
  )
}
