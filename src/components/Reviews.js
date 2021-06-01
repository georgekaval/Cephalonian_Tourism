import React, { Component } from 'react'
import NewReview from './NewReview'

class Reviews extends Component{
  constructor(props){
    super(props)
    this.state = {
      reviews: '',
      reviewToBeEdited: {},
      createEditToggle: false,
      attraction: this.props.attraction
    }
  }

  getReviews = async () => {
    const url = this.props.baseUrl + '/api/v1/reviews/'
    try{
      const response = await fetch(url, {
        method: "GET",
        credentials: "include"
      })
      const reviews = await response.json()
      console.log(reviews)
      if(response.status === 200){
        this.setState({
          reviews: reviews.data
        })
      }
    }
    catch(err){
      console.log('Error: ', err);
    }
  }

  addReview = (newReview) => {
    const copyReviews = [...this.state.reviews]
    copyReviews.push(newReview.data)
    this.setState({
      reviews: copyReviews
    })
  }

  deleteReview = async (id) => {
    const url = this.props.baseUrl + '/api/v1/reviews/' + id
    try{
      const response = await fetch(url, {
        method: "DELETE",
        credentials: "include"
      })
      if(response.status === 200) {
        const index = this.state.reviews.findIndex(review => review.id === id)
        const copyReviews = [...this.state.reviews]
        copyReviews.splice(index, 1)
        this.setState({
          reviews: copyReviews
        })
      }
    }
    catch(err){
      console.log('Error: ', err)
    }
  }

  handleEditSubmit = async (event) => {
    event.preventDefault()
    const url = this.props.baseUrl + '/api/v1/reviews/' + this.state.reviewToBeEdited.id
    try{
      const response = await fetch(url, {
        credentials: "include",
        method: "PUT",
        body: JSON.stringify({
          review: event.target.review.value,
          attraction: this.state.attraction.id,
        }),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      if(response.status === 200) {
        const updatedReview = await response.json()
        const findIndex = this.state.reviews.findIndex(review => review.id === updatedReview.data.id)
        const copyReviews = [...this.state.reviews]
        copyReviews[findIndex] = updatedReview.data
        this.setState({
          reviews: copyReviews,
          createEditToggle: false
        })
      }
    }
    catch(err){
      console.log('Error: ', err)
    }
  }

  componentDidMount(){
    console.log('mounting');
    this.getReviews()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleEditToggle = (review) => {
    this.setState({
      createEditToggle: true,
      reviewToBeEdited: review
    })
  }

  render(){
    console.log(this.state.attraction);
    console.log(this.state.reviews);
    if (!this.state.reviews){
      return <span> Loading </span>
    }
    return(
      <div>
        <h1 className="text">Reviews</h1>

          <ul>
            {this.state.reviews.map(review => {
              return(
                  <div key={review.id}>
                      <h3 className="text">{review.user.username}:   {review.review} </h3>
                      <button className="button" onClick={() => this.handleEditToggle(review)}> Edit </button>
                      <button className="button" onClick={() => this.deleteReview(review.id)}>Delete</button>
                  </div>
              )
            })}
          </ul>
          <br></br>
          <NewReview baseUrl={this.props.baseUrl} addReview={this.addReview} attraction={this.state.attraction}/>
          {
          this.state.createEditToggle &&
          <form className="editReviewForm" onSubmit={this.handleEditSubmit}>

              <label className="textEditForm">Edit Review: </label>
              <br></br>
              <textarea name='review' value={this.state.attraction.review} placeholder={this.state.attraction.review} onChange={this.handleChange}/> <br></br>
              <input name='attraction'  type="hidden" value={this.state.reviewToBeEdited.attraction.id}/>
              <input name="user" type="hidden" value={this.state.reviewToBeEdited.user.id}/>
              <button className="editButton" content="Submit"> SUBMIT CHANGES</button>
            </form>
          }
      </div>
    )
  }
}

export default Reviews