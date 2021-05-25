import React, { Component } from 'react'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <>
        <h2>Nar Bar </h2>
        <h3> HomeScreenIcon </h3>
        <h3> Attractions </h3>
        <h3> Log In </h3>
        <h3> Sign Up </h3>
        <h3> Log Out </h3>
        <h3> Username </h3>
      </>
    )
  }
}

export default NavBar
