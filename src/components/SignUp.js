import React, { Component } from 'react'

class SignUp extends Component{
  constructor(props){
    super(props)
    this.state={
      email: '',
      username: '',
      password: '',
      signUpFormToggle: false
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }


  handleSubmit = async (event) => {
    event.preventDefault()
    const url = this.props.baseUrl + '/api/v1/users/register'
    try{
      const response = await fetch(url, {
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
      })
      if(response.status === 200){
        const user = await response.json()
        this.props.signedInToggle()
        this.props.userIsFound(user)
        this.setState({
          email: '',
          username: '',
          password: '',
          signUpFormToggle: true
        })
      }
    }
    catch(err){
      console.log('Error: ', err);
    }
  }

  render(){

    return(
      <div>
        {
          this.state.signUpFormToggle
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
              <input className="buttonSignUp" type="submit" value="Sign Up"/>
            </div>
          </form>
        }
      </div>
    )
  }
}



export default SignUp
