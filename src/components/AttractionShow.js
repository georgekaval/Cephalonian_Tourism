import React, { Component } from "react"

class  AttractionShow extends Component{
  constructor(props){
    super(props)
    this.state = {


    }
  }









  render(){
    console.log(this.props.attraction.data)
    return(
      <div>
        <h3 className="text">{this.props.attraction.data.name}</h3>
        <br></br>
        <img className='showImage' src={this.props.attraction.data.image} alt={this.props.attraction.data.name}></img>
        <br></br>
        <h3 className="text">{this.props.attraction.data.location}</h3>
        <br></br>
        <p className="text">{this.props.attraction.data.info}</p>
        <br></br>


      </div>
    )
  }
}

export default AttractionShow
