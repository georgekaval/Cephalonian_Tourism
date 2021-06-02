import React, { Component } from "react"
import Reviews from './Reviews'

class  AttractionShow extends Component{
  constructor(props){
    super(props)
    this.state = {
      attraction : this.props.attraction.data,
      currentUser: this.props.currentUser
    }
  }

  render(){
    console.log(this.state.attraction);
    console.log(this.state.currentUser);
    return(
      <div>
        <h1 className="header text">{this.state.attraction.name}</h1>
        <br></br>
        <div className="showContainer">
          <img className='showImage' src={this.state.attraction.image} alt={this.state.attraction.name}></img>
          <div>
            <p className="text showInfo">{this.state.attraction.info}</p>
            <br></br>
            <h3 className="text"> {this.state.attraction.location}</h3>
          </div>
        </div>
        <Reviews baseUrl={this.props.baseUrl} attraction={this.state.attraction} currentUser={this.state.currentUser}/>
        <button className="button" onClick={() => this.props.hideAttractionShowPage()}>Back to List of Attractions</button>
      </div>

    )
  }
}

export default AttractionShow
