import React, { Component } from 'react'

class NewReview extends Component{
  constructor(props){
    super(props)
    this.state = {
      createToggle: false,
      review: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = async(event) => {
    const url = this.props.baseUrl + '/api/v1/reviews/' + this.props.attraction.id
    try{
      const response = await fetch(url, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
        review: this.state.review
      }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(response.status === 200){
        const createReview = await response.json()
        this.props.addReview(createReview)
        this.setState({
          review: '',

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
          <form onSubmit={(evt) => this.handleSubmit(evt)}>
            <label htmlFor="name">Review: </label>
            <input type="text" id="review" name="review" onChange={(evt) => this.handleChange(evt)} value={this.state.review}/>
            <br></br>
            <input type="submit" value="Add Review" />
          </form>
          :
          <button className="button" onClick={() => this.handleToggle()}>Write a review!</button>
        }
      </div>
    )
  }
}
export default NewReview
