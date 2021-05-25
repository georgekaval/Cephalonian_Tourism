import React, { Component } from 'react'

class AttractionPage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    console.log(this.props.attractions);
    return(
      <>
        <ul>

           <button>{this.props.attractions.name}</button>
        </ul>
      </>
    )
  }
}

export default AttractionPage
