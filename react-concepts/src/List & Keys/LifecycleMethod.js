import React, { Component } from 'react'

/* there are four phase of life cycle of a method or components
MOUNTING -- a instance ofa component is created & inserted into the DOM file
UPDATING -- when a component is being re-render as a result of changes to either of it prpos or state
UNMOUNTING -- When a component is being removed from a DOM
Error Handling -- when an error is occurred during rendering

TO HANDLE THE LIFECYCLE 
MOUNTING -- constructor(props) , static getDerivedStateFromProps(props ,state) , render() , componentDidMount()

UPDATING -- static getDerivedStateFromProps(props ,state) , shouldComponentUpdate(nextprops , nextstate) , render() , getSnapshotBeforeUpdate() , componentDidUpdate()

UNMOUNTING -- componentWillUnmount()

Error Handling -- static getDerivedStateFromError() , componentDidCatch()

*/

export default class LifecycleMethod extends Component {
    
    //   constructor(props) --> * A special function that will get called whenever a new component is created
    //   * initializing state and for Binding the event handler
    //   * Always do not cause side effect like eg: HTTP request inside a constructor
    //   * Always make use of the super(props) to directly overwrite this.state in the components
      constructor(props) {
      super(props)
      this.state = {
         name : 'Sujith'
      }
      console.log('Lifecycle constructor')
    }
    //USED IS MOUNTING & UPDATING  
    //static getDerivedStateFromProps(props , state) --> * when the state of the component depends on changes in props dynamically over time
    //                                                 * set a state
    //                                                 * Always do not cause side effect like eg: HTTP request inside this method
    static getDerivedStateFromProps(props,state){
        console.log('life Cycle from get derived state')
        return null
    }
    // componentDidMount() --> * called only once in its life cycle
    //                     * invoked immediately after a component & all its children component have been render to the DOM
    //                     * Perfect place to cause side effect Eg: To Interact with DOM or perform any ajax call to load data
    //while rendering the did mount Method is the last to executer even while communicating with child component
    componentDidMount(){
        console.log('life Cycle Component did Mount')
    }
    //UPDATE METHOD
    //Dictates where to re render the component or not by returning true or false
    //basically used for performance optimization
    //DO NOT call side effect inside it Eg: HTTP request or calling setState method
    shouldComponentUpdate(nextprops,nextstate){
        console.log('life cycle shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
            console.log('Life cycle from getSnapshotBeforeUpdate')
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('life Cycle from componentDidUpdate')
    }
    // render(){} --> * only required method 
    //             * read props & state and return the JSX 
    //             * Do not change the state directly or intract with DOM & make Ajax calls inside it
    //             * Children component lifecycle method are also executed using this 
  render() {
    console.log('life Cycle From render')
    return (
      <div>Life cycle Method CHECK console</div>
    )
  }
}
