import React, { Component } from 'react'

class NewAttraction extends Component{
  constructor(props){
    super(props)
    this.state = {
      createToggle: false,
      name: '',
      location: '',
      image: '',
      info: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = async(event) => {
    event.preventDefault()
    const url = this.props.baseUrl + '/api/v1/attractions/'
    try{
      const response = await fetch(url, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
        name: this.state.name,
        location: this.state.location,
        image: this.state.image,
        info: this.state.info
      }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(response.status === 200){
        const createAttraction = await response.json()
        this.props.addAttraction(createAttraction)
        this.setState({
          name: '',
          location: '',
          image: '',
          info: ''
        })

      }
    }
    catch(err){
      console.log('Error: ', err);
    }
  }

  handleToggle = () => {
    this.setState({
      createToggle: true
    })
  }

  render(){
    return(
      <div>
        {
          this.state.createToggle
          ?
          <form className="newForm" onSubmit={(evt) => this.handleSubmit(evt)}>
            <label className="text" htmlFor="name">Name: </label>
            <br></br>
            <input type="text" id="name" name="name" onChange={(evt) => this.handleChange(evt)} value={this.state.name}/>
            <br></br>
            <label className="text" htmlFor="location">Location: </label>
            <br></br>
            <input type="text" id="location" name="location" onChange={(evt) => this.handleChange(evt)}  value={this.state.location}/>
            <br></br>
            <label className="text" htmlFor="image">Image: </label>
            <br></br>
            <input type="text" id="image" name="image" onChange={(evt) => this.handleChange(evt)} value={this.state.image}/>
            <br></br>
            <label className="text" htmlFor="info">Info: </label>
            <br></br>
            <textarea type="text" className="textboxInput" id="info"  name="info" onChange={(evt) => this.handleChange(evt)} value={this.state.info}/>
            <br></br>

            <input className="buttonSubmitCreate" type="submit" value="Add Attraction" />
          </form>
          :
          <div className="centerButtonDiv">
            <button className="buttonCreateAttraction" onClick={() => this.handleToggle()}>Create Attraction</button>
          </div>
        }

      </div>
    )
  }
}

export default NewAttraction
