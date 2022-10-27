import React, { Component } from 'react'


import axios from 'axios'

export class HTTP_REQ_POST extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId : '',
         title : '', //Declaring state because of class comp
         body : ''
      }
    }
    EventHandler = e =>{
        this.setState({[e.target.name]: e.target.value}) //eventHandler for input onchange event
    }
    submitHandler = submit =>{
        submit.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts34',this.state) //sumbitHandler for button onclick event
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
  render() {
    const {userId , title ,body} = this.state
    return (
      <div>
      {/* <h3>HTTP Request POST</h3> */}
      <from onSubmit ={this.submitHandler}>
        <div>
            <input type='text' name='userId' value={userId} onChange = {this.EventHandler}/>
        </div>
        <div>
            <input type='text' name='title' value={title} onChange = {this.EventHandler}/>
        </div>
        <div>
            <input type='text' name='body' value={body} onChange = {this.EventHandler}/>
        </div>
      </from>
      <button type='submit' onClick={this.submitHandler}>Submit</button>
        </div>
    )
  }
}

export default HTTP_REQ_POST