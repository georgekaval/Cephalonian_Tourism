import React, { Component } from "react"
import Reviews from './Reviews'

class  AttractionShow extends Component{


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

        <Reviews baseUrl={this.props.baseUrl}/>

      </div>
    )
  }
}

export default AttractionShow
