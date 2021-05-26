import React, { Component } from 'react'
import AttractionsIndex from './AttractionsIndex'

class Attractions extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }





  render(){


    return(
      <>
        <h2>Attractions</h2>
        <AttractionsIndex baseUrl={this.props.baseUrl} />
      </>
    )
  }
}
export default Attractions
