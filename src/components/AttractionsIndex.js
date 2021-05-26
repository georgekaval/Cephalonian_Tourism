import React, { Component } from 'react'
import AttractionShow from './AttractionShow'

class AttractionsIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAttractionShowPage: false,
      showAttractionIndex: true,
      attractions: '',
      attractionToBeShown: {}
    }
  }

// Need to make the click only show the attraction clicked, currently since the map function in render, it is running handleClick() for all attractions.
  handleClick = async (id) => {
    const url = this.props.baseUrl + '/api/v1/attractions/' + id
    try{
      const response = await fetch(url, {
        credentials: "include",
        method: "GET"
      })
      if(response.status === 200){
        const showAttraction = await response.json()
        this.setState({
          attractionToBeShown: showAttraction,
          showAttractionShowPage: true,
          showAttractionIndex: false,
        })
      }
    }
    catch(err){
      console.log('Error: ', err);
    }
  }

  getAttraction = async () => {
    const url = this.props.baseUrl + '/api/v1/attractions/'
    try{
      const response = await fetch(url, {
        method: "GET",
        credentials: "include"
      })
      const attractions = await response.json()
      if(response.status === 200){
        this.setState({
          attractions: attractions
        })
      }
    }
    catch(err) {
      console.log('Error: ', err)
    }
  }

  componentDidMount(){
    console.log('mounting');
    this.getAttraction()
  }



  render(){
    console.log(this.state.attractions)
    console.log(this.state.attractions.data)
    if (!this.state.attractions){
      return <span> Loading </span>
    }
    return(
      <div>

        {
          this.state.showAttractionIndex &&
          <ul  className="indexStyle">
            {this.state.attractions.data.map(attraction => {
              return(
                <div key={attraction.id}>
                  <h3 className="text">{attraction.name}</h3>
                  <br></br>
                  <button onClick={() => this.handleClick(attraction.id)}><img className= 'imageAttraction' src={attraction.image} alt={attraction.name}></img></button>
                </div>
              )
            })}
          </ul>
        }

        {
          this.state.showAttractionShowPage &&
          <AttractionShow attraction={this.state.attractionToBeShown}/>
        }

      </div>
    )
  }
}

export default AttractionsIndex
