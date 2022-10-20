/*Basically WEB App is used to send the data to the server as a request to Fetch the data

React app only build to handle the UI and fetch the data as props & state but when the app want to make AJAX Calls them HTTP Comes to picture

To Handle Request the HTTP Library is used to Push and pull the Request
 
Here we are using axios API for HTTP Request 

for installing the AXIOS in command -- npm install axios -- will install axios 
TO CHECK -- package.json in that under dependency check axios 

thus axios is installed
*/

import React, { Component } from 'react'

import axios from 'axios'

 class HTTP_Req_Intro extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         list : [],
         error : ''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(reaction =>{
            console.log(`${reaction}Respones from then`)
            this.setState({list : reaction.data})
        })
        .catch(error =>{
            console.log(`${error}Error Catched`)
            this.setState({errorMsg : 'Error Occurs'})
        })
    }
  render() {
    const {list,errorMsg} = this.state
    return (
      <div>
        <h3>HTTP Request Intro by use of Class Component</h3>
        <ul>{
            list.length ? list.map(list => <li><b key={list.id}>Title :{list.title}</b></li> ): null
        }</ul>
        {errorMsg ? <div>{errorMsg}</div>:null}
        </div>
    )
  }
}

export default HTTP_Req_Intro