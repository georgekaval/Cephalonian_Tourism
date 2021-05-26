import React, { Component } from "react"

class  AttractionShow extends Component{
  constructor(props){
    super(props)
    this.state = {
      createEditToggle: false,
      createDeleteToggle: false,
      attractionToBeEdited: {},

    }
  }

  handleEditToggle = (attraction) => {
    this.setState({
      createEditToggle: true,
      attractionToBeEdited: attraction
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
        const copyAttraction = this.props.attraction.data
        copyAttraction = updatedAttraction.data
        this.setState({
          createEditToggle: false,

        })
      }
    }
    catch(err){
      console.log('Error: ', err);
    }
  }

  handleDeleteToggle = () => {
    this.setState({
      createDeleteToggle: true
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    console.log(this.state.name);
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
        <button onClick={() => this.handleEditToggle(this.props.attraction.data)}>Edit</button>
        <button onClick={() => this.handleDeleteToggle()}>Delete</button>
        {
          this.state.createEditToggle &&
          <form onSubmit={this.handleEditSubmit}>
              <label>Name: </label>
              <input name='name' value={this.props.attraction.data.name} onChange={this.handleChange}/> <br></br>
              <label>Location: </label>
              <input name='location' value={this.props.attraction.data.location} onChange={this.handleChange}/> <br></br>
              <label>Image: </label>
              <input name='image' value={this.props.attraction.data.image} onChange={this.handleChange}/> <br></br>
              <label>Info: </label>
              <input name='info' value={this.props.attraction.data.info} onChange={this.handleChange}/> <br></br>
              <button content="Submit"> SUBMIT </button>
            </form>




        }
      </div>
    )
  }
}

export default AttractionShow
