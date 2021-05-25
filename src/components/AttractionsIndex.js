import React, { Component } from 'react'
import AttractionShow from 'react'

class AttractionsIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      attraction: ''
    }
  }



  render(){
    console.log(this.props.attractions);
    return(
      <>
        <h1> Attractions Index Page </h1>
        <ul>
           <button>{this.props.attractions.name}</button>
        </ul>
      </>
    )
  }
}

export default AttractionsIndex
