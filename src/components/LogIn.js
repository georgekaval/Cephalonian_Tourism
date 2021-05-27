import React, { Component } from 'react'

class LogIn extends Component{
  constructor(props){
    super(props)
    this.state={
      email: '',
      password: '',
      username: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const url = this.props.baseUrl + '/api/v1/users/login'
    const loginBody = {
      username: event.target.username.value,
      password: event.target.password.value,
      email: event.target.email.value
    }
    try{
      const response = await fetch(url, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(loginBody),
        headers: {
          'Content-type': 'application/json'
        }})
      if(response.status === 200){
        
      }
    }
    catch(err){
      console.log('Error: ', err)
    }
  }

  render(){
    return(
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <h3>Log In </h3>
          <br></br>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" onChange={(evt) => this.handleChange(evt)} value={this.state.email}/>
          <br></br>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" onChange={(evt) => this.handleChange(evt)} value={this.state.username}/>
          <br></br>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password" onChange={(evt) => this.handleChange(evt)} value={this.state.password} />
          <br></br>
          <input type="submit" value="Log In"/>
        </form>
    )
  }
}



export default LogIn
