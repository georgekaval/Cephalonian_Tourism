import React, { Component } from 'react'
import AttractionsIndex from './AttractionsIndex'

class Attractions extends Component {
  constructor(props){
    super(props)
    this.state = {
      attractions: ''
    }
  }

  getAttraction = async (id) => {
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
    if (!this.state.attractions){
      return <span> Loading </span>
    }
    console.log(this.state.attractions)
    console.log(this.state.attractions.data)
    return(
      <>
        <h1> Attractions Page </h1>
        <h2>Attractions</h2>
        <ul>
          {this.state.attractions.data.map(attraction => {
            return(
              <>
               <AttractionsIndex key={attraction._id} attractions={attraction} baseUrl={this.props.baseUrl}/>
              </>
            )
          })}
        </ul>
      </>
    )
  }
}
export default Attractions
