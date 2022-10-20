import React ,{Component}from 'react'


export default class FormHandleing extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comment :'',
         topics : 'React'
      }
    }
    UserNameChange = e =>{
            this.setState({
              username : e.target.value
            })
    } 
    Commentchange = event  =>{
        this.setState({
            comment : event.target.value
        })
    }
    TopicChange =e =>{
        this.setState({
            topics : e.target.value
        })
    }
    sumbitForm = e =>{
        alert(`${this.state.username} 
        ${this.state.comment}
        ${this.state.topics}`) 
        e.preventDefault()
    }
  render() {
    
    return (
        <form onSubmit={this.sumbitForm}>
      <div>
        <h1>Form Handleing</h1>
        <label>UserName : </label>
        <input type='text' value={this.username} onChange={this.UserNameChange} />
      <label>Comments : </label>
      <textarea value={this.state.comment} onChange={this.Commentchange} placeholder='Suggestions always welcomes'></textarea>
      </div> 
      <label>Courses : </label>
      <select value={this.state.topics} onChange={this.TopicChange}>
        <option value='React'>React Js</option>
        <option value='Angular'>Angular Js</option>
        <option value='Vue'>Vue</option>
      </select>     
         <br></br>
      <button onClick={this.PrintDoc}>Sumbit</button>  <br></br> 
      <b>UserName :<i>{this.state.username}</i></b>
      <b>Comments :<i>{this.state.comment}</i></b>
      <b>Courses :<i>{this.state.topics}</i></b>
      </form>
    )
  }
}
