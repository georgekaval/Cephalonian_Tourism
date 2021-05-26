import React, { Component } from 'react'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      signedIn: false,

    }
  }
//Will want to implement there with a ternary operator
//        <h3 className="navItem"> Log Out </h3>
//        <h3 className="navItem"> Username </h3>
  render(){
    return(
      <div className="navBar">

        <h3 className="navItem"> HomeScreenIcon </h3>
        <h3 className="navItem"> Attractions </h3>
        <h3 className="navItem"> Log In </h3>
        <h3 className="navItem"> Sign Up </h3>

      </div>
    )
  }
}

export default NavBar
