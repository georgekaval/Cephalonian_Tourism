import React, { Component } from 'react'

class AppHome extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <div>

        <h2 className="text"> Cephalonia </h2>
        <img className="homeImage" src="https://www.greece-is.com/wp-content/uploads/2016/07/KEFALONIA-fiskardo-06.jpg"></img>
        <p className="text">Info Section</p>
      </div>
    )
  }
}

export default AppHome
