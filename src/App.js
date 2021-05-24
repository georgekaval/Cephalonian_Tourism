import './App.css';
import React, { Component } from 'react'

console.log(process.env.NODE_ENV);
let baseUrl = "http://localhost:8000"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      attraction: []
    }
  }
  getAttraction = async (id) => {
    const url = baseUrl + '/api/v1/attractions/'
    try{
      const response = await fetch(url, {
        method: "GET",
        credentials: "include"
      })
      const attractions = await response.json()
      console.log(attractions)
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
      <div>
        <h1> Attractions </h1>
        <ul>
          {this.state.attractions.data.map(attraction => {
            return(
              <div key={attraction.id}>
                <li>
                  <img id='imageAttraction' src={attraction.image} alt={attraction.name}></img>
                  <br></br>
                  {attraction.name}
                  <br></br>
                  {attraction.location}
                  <br></br>
                  {attraction.info}
                  <br></br>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App;
