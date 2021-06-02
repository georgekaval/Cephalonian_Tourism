import React, { Component } from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'


class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      signedIn: false,
      wantsToLogIn: false,
      wantsToSignUp: false,
      wantsToLogOut: false,
      logOutFormToggle: false,


    }
  }

  seeSignUpToggle = () => {
    this.setState({
      wantsToSignUp: true
    })
  }

  seeLogInToggle = () => {
    this.setState({
      wantsToLogIn: true
    })
  }

  seeLogOutToggle = () => {
    this.setState({
      wantsToLogOut: true
    })
  }

  signedInToggle = () => {
    this.setState({
      signedIn: true
    })
  }


  logoutUser = async (event) => {
    const url = this.props.baseUrl + '/api/v1/users/logout'
    try{
      const response = await fetch(url, {
        credentials: "include",
        method: "GET"
      })
      const user = await response.json()
      console.log(user)
      if(response.status === 200){
        this.setState({
          currentUser: '',
          logOutFormToggle: true,
          wantsToLogIn: false,
          wantsToSignUp: false,
          signedIn: false
        })
      }
    }
    catch(err){
      console.log('Error: ', err);
    }
  }

  //Want to remove flex from navbar and relocate buttons such as sign up and log in on right, and username with logout close together.
  render(){
    console.log(this.state.wantsToLogIn);
    console.log(this.state.wantsToSignUp);
    console.log(this.props.currentUser);
    return(
      <div className="navBar">

        <button className="navItem" onClick={() => this.props.seeHomePageClick()}> Home </button>
        <button className="navItem" onClick={() => this.props.seeAttractionIndexPage()}> Attractions </button>
        {
          (!this.state.signedIn && !this.state.wantsToSignUp && !this.state.wantsToLogIn)
          &&
          <>
            <button className="navItem" onClick={() => this.seeSignUpToggle()}> Sign Up </button>
            <button className="navItem" onClick={() => this.seeLogInToggle()}> Log In </button>
          </>


        }
        {
          this.state.wantsToSignUp
          &&
          <SignUp
            baseUrl={this.props.baseUrl}
            signedInToggle={this.signedInToggle}
            currentUser={this.props.currentUser}
            logoutUser={this.logoutUser}
            userIsFound={this.props.userIsFound}
          />
        }
        {
          this.state.wantsToLogIn
          &&
          <LogIn
            baseUrl={this.props.baseUrl} 
            signedInToggle={this.signedInToggle}
            userIsFound={this.props.userIsFound}
            currentUser={this.props.currentUser}
            logoutUser={this.logoutUser}
          />
        }

      </div>
    )
  }
}

export default NavBar
