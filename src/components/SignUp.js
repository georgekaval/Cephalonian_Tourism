import React, { Component } from 'react'

class SignUp extends Component{
  constructor(props){
    super(props)
    this.state={
      email: '',
      username: '',
      password: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(this.props.baseUrl + '/api/v1/users/register', {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( res => {
      return res.json()
    }).then(
      this.setState({
        email: '',
        username: '',
        password: '',

      })
    ).catch(error => console.log({"Error": error}))
  }
  render(){
    return(
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <h3>Sign Up </h3>
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
          <input type="submit" value="Sign Up"/>
        </form>
    )
  }
}



export default SignUp
