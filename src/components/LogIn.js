import React, { Component } from 'react'

class LogIn extends Component{
  constructor(props){
    super(props)
    this.state={
      email: '',
      password: '',
      username: '',
      logInFormToggle: false
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
        const user = await response.json()
        this.props.signedInToggle()
        this.props.userIsFound(user)
        this.setState({
          email: '',
          username: '',
          password: '',
          logInFormToggle: true
        })
      }
    }
    catch(err){
      console.log('Error: ', err)
    }
  }

  render(){
    console.log(this.props.logOutFormToggle);
    return(
      <div>
        {
          (this.state.logInFormToggle && !this.props.logOutFormToggle)
          ?
          <>
            <h3 className="userGreeting">Hello {this.props.currentUser.data.username}!</h3>

            <button className="buttonLogOut" onClick={() => this.props.logoutUser()}> Log Out </button>
          </>
          :
          <form className="userForm" onSubmit={(evt) => this.handleSubmit(evt)}>
            <div>
              <label className="textUserForm" htmlFor="email">Email:</label>
              <br></br>
              <input type="text" id="email" name="email" onChange={(evt) => this.handleChange(evt)} value={this.state.email}/>
              <br></br>
              <label className="textUserForm" htmlFor="username">Username:</label>
              <br></br>
              <input type="text" id="username" name="username" onChange={(evt) => this.handleChange(evt)} value={this.state.username}/>
              <br></br>
            </div>
            <div>
              <label className="textUserForm" htmlFor="password">Password:</label>
              <br></br>
              <input type="password" id="password" name="password" onChange={(evt) => this.handleChange(evt)} value={this.state.password} />
              <br></br>
              <input className="buttonSignUp" type="submit" value="Log In"/>
            </div>
          </form>
        }

      </div>
    )
  }
}



export default LogIn
