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
      currentUser: '',

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

  signedInToggle = () => {
    this.setState({
      signedIn: true
    })
  }

  userIsFound = (user) => {
    this.setState({
      currentUser: user
    })
  }
//Will want to implement there with a ternary operator
//        <h3 className="navItem"> Log Out </h3>
//        <h3 className="navItem"> Username </h3>
  render(){
    console.log(this.state.wantsToLogIn);
    console.log(this.state.wantsToSignUp);
    console.log(this.state.currentUser);
    return(
      <div className="navBar">

        <h3 className="navItem"> HomeScreenIcon </h3>
        <h3 className="navItem"> Attractions </h3>
        {
          !this.state.signedIn
          ?
          <>
            <button className="navItem" onClick={() => this.seeSignUpToggle()}> Sign Up </button>
            <button className="navItem" onClick={() => this.seeLogInToggle()}> Log In </button>
          </>
          :
          <h3>{this.props.currentUser}</h3>
        }
        {
          this.state.wantsToSignUp
          &&
          <SignUp baseUrl={this.props.baseUrl} signedInToggle={this.signedInToggle} userIsFound={this.userIsFound} currentUser={this.state.currentUser}/>
        }
        {
          this.state.wantsToLogIn
          &&
          <LogIn baseUrl={this.props.baseUrl} signedInToggle={this.signedInToggle} userIsFound={this.userIsFound}/>
        }



      </div>
    )
  }
}

export default NavBar
