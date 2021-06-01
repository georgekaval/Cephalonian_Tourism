import React, { Component } from "react"
import Reviews from './Reviews'

class  AttractionShow extends Component{
  constructor(props){
    super(props)
    this.state = {
      attraction : this.props.attraction.data
    }
  }

  render(){
    console.log(this.state.attraction);

    return(
      <div>
        <h3 className="text">{this.state.attraction.name}</h3>
        <br></br>

        <img className='showImage' src={this.state.attraction.image} alt={this.state.attraction.name}></img>
        <br></br>

        <h3 className="text">{this.state.attraction.location}</h3>
        <br></br>

        <p className="text">{this.state.attraction.info}</p>
        <br></br>

        <Reviews baseUrl={this.props.baseUrl} attraction={this.state.attraction}/>
        <button className="button" onClick={() => this.props.hideAttractionShowPage()}>Back to List of Attractions</button>
      </div>
    )
  }
}

export default AttractionShow
