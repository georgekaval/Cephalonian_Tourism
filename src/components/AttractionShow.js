import React, { Component } from "react"
import Reviews from './Reviews'

class  AttractionShow extends Component{
  constructor(props){
    super(props)
    this.state = {
      attraction : this.props.attraction.data,

    }
  }

  render(){
    console.log(this.state.attraction);
    console.log(this.props.currentUser);
    return(
      <div>
        <h1 className="headerAttractions">{this.state.attraction.name}</h1>
        <br></br>
        <div className="showContainer">
          <img className='showImage' src={this.state.attraction.image} alt={this.state.attraction.name}></img>
          <div>
            <p className="text showInfo">{this.state.attraction.info}</p>
            <br></br>
            <h3 className="text"> Location: {this.state.attraction.location}</h3>
          </div>
        </div>
        <Reviews
          baseUrl={this.props.baseUrl}
          attraction={this.state.attraction}
          currentUser={this.props.currentUser}
        />
        <div className="centerButtonDiv">
          <button className="button" onClick={() => this.props.seeAttractionIndexPage()}>Back to List of Attractions</button>
        </div>
      </div>

    )
  }
}

export default AttractionShow
