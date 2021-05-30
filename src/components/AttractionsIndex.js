import React, { Component } from 'react'
import AttractionShow from './AttractionShow'
import NewAttraction from './NewAttraction'


class AttractionsIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      attractions: '',
      attractionToBeShown: {},
      createEditToggle: false,
      createDeleteToggle: false,
      attractionToBeEdited: {}

    }
  }


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
        })
        this.props.hideAttractionIndexPage()
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
          attractions: attractions.data
        })
      }
    }
    catch(err) {
      console.log('Error: ', err)
    }
  }

  addAttraction = (newAttraction) => {
    const copyAttractions = [...this.state.attractions]
    copyAttractions.push(newAttraction.data)
    this.setState({
      attractions: copyAttractions
    })
  }

  handleEditSubmit = async (event) => {
    event.preventDefault()
    const url = this.props.baseUrl + '/api/v1/attractions/' + this.state.attractionToBeEdited.id
    try{
      const response = await fetch(url, {
        credentials: "include",
        method: "PUT",
        body: JSON.stringify({
          name: event.target.name.value,
          location: event.target.location.value,
          image: event.target.image.value,
          info: event.target.info.value
        }),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      if(response.status === 200){
        const updatedAttraction = await response.json()
        const findIndex = this.state.attractions.findIndex(attraction => attraction.id ===
        updatedAttraction.data.id)
        const copyAttraction = [...this.state.attractions]

        copyAttraction[findIndex] = updatedAttraction.data
        this.setState({
          createEditToggle: false,
          attractions: copyAttraction
        })
      }
    }
    catch(err){
      console.log('Error: ', err);
    }
  }

  deleteAttraction = async (id) => {
    const url = this.props.baseUrl + '/api/v1/attractions/' + id
    try{
      const response = await fetch(url, {
        method: "DELETE",
        credentials: "include"
      })
      if(response.status === 200){
        const index = this.state.attractions.findIndex(attraction => attraction.id === id)
        const copyAttractions = [...this.state.attractions]
        copyAttractions.splice(index, 1)
        this.setState({
          attractions: copyAttractions,
          createDeleteToggle: true
        })
      }
    }
    catch(err){
      console.log('Error: ', err)
    }
  }

  componentDidMount(){
    console.log('mounting');
    this.getAttraction()
  }

  handleEditToggle = (attraction) => {
    this.setState({
      createEditToggle: true,
      attractionToBeEdited: attraction
    })
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


// Edit form for attraction should show up closer to attraction and needs styling

  render(){
    console.log(this.state.attractions)
    console.log(this.props.showAttractionShowPage);
    console.log(this.props.showAttractionsIndex);
    if (!this.state.attractions){
      return <span> Loading </span>
    }
    return(
      <div>

        {
          this.props.showAttractionsIndex &&
          <>
            <ul  className="indexStyle">
              {this.state.attractions.map(attraction => {
                return(
                  <div key={attraction.id}>
                    <h3 className="text">{attraction.name}</h3>
                    <button onClick={() => this.handleClick(attraction.id)}><img className= 'imageAttraction' src={attraction.image} alt={attraction.name}></img></button>
                    <br></br>
                    <button className="button" onClick={() => this.handleEditToggle(attraction)}>Edit</button>
                    <button className="button" onClick={() => this.deleteAttraction(attraction.id)}>Delete</button>
                  </div>
                )
              })}
            </ul>
            {
              this.state.createEditToggle &&
              <form onSubmit={this.handleEditSubmit}>
                  <label>Name: </label>
                  <input name='name' value={this.state.attractions.name} onChange={this.handleChange}/> <br></br>

                  <label>Location: </label>
                  <input name='location' value={this.state.attractions.location} onChange={this.handleChange}/> <br></br>

                  <label>Image: </label>
                  <input name='image' value={this.state.attractions.image} onChange={this.handleChange}/> <br></br>

                  <label>Info: </label>
                  <input name='info' value={this.state.attractions.info} onChange={this.handleChange}/> <br></br>

                  <button content="Submit"> SUBMIT </button>
                </form>
            }
            <br></br>
            <NewAttraction baseUrl={this.props.baseUrl} addAttraction={this.addAttraction}/>
          </>
        }

        {
          this.props.showAttractionShowPage &&
          <AttractionShow baseUrl={this.props.baseUrl} attraction={this.state.attractionToBeShown} hideAttractionShowPage={this.props.hideAttractionShowPage} />
        }

      </div>
    )
  }
}

export default AttractionsIndex
