import React, { Component } from 'react'

class AppHome extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <>
        <h1>Home Page </h1>
        <h2> Cephalonia </h2>
        <img id="homeImage" src="https://www.greece-is.com/wp-content/uploads/2016/07/KEFALONIA-fiskardo-06.jpg"></img>
        <p>Info Section</p>
      </>
    )
  }
}

export default AppHome
