import React, { Component } from 'react'
import AttractionsIndex from './AttractionsIndex'

class Attractions extends Component {






  render(){


    return(
      <div>
        <AttractionsIndex baseUrl={this.props.baseUrl} />
      </div>
    )
  }
}
export default Attractions
