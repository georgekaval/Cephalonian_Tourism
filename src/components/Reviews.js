import React, { Component } from 'react'

class Reviews extends Component{
  constructor(props){
    super(props)
    this.state = {
      reviews: [],
      reviewToBeEdited: {},
      createEditToggle: false
    }
  }

  getReviews = async (id) => {
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
    const url = this.props.baseUrl + '/api/vi/reviews/' + id
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

  handleEdit = async (event) => {
    event.preventDefault()
    const url = this.props.baseUrl + '/api/vi/reviews/' + this.state.reviewToBeEdited.id
    try{
      const response = await fetch(url, {
        credentials: "include",
        method: "PUT",
        body: JSON.stringify({
          review: event.target.review.value,
          user: event.target.user.value,
          attraction: event.target.attraction.value
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
    console.log(this.state.reviews);
    return(
      <div>
        <h1 className="text">Reviews</h1>
        <table>
          {this.state.reviews.map(review => {
            return(
              <div key={review.id}>
                <tr>
                  <th className="text">Visitor</th>
                  <th className="text">Review</th>
                </tr>
                <tr>
                  <td className="text">{review.user.username}</td>
                  <td className="text">{review.review}</td>
                </tr>
              </div>
            )
          })}
        </table>
      </div>
    )
  }
}

export default Reviews
