import './App.css';
import React, { Component } from 'react'
import AttractionsIndex from './components/AttractionsIndex'
import AppHome from './components/AppHome'
import NavBar from './components/NavBar'


console.log(process.env.NODE_ENV);
let baseUrl = "http://localhost:8000"

//App component will be home page and hold these children:  IndexAttraction,  NavBar, AppHome, stretch goal favorites list.

// AttractionIndex component will hide Apphome and keep NavBar, and will hold these children: Reviews, AttractionShow, stretch google maps. Putting reviews as a child here so the reviews can be connected with their specific attraction.

//AttractionShow: will have info of attraction.  Need to have the ability to edit and delete attractions if the user is an admin

// Review component holds state and the list of reviews, then have ReviewPost component as each individual review.  Can have a add function in the review component that I pass down to the ReviewPost components. Should I have state in the review component?  Why should i lift up state? Maybe the review component can just hold all the reviews in a list, and each review keep their own state?   Need to make a review component that shows the current reviews list on the attraction and has a button to add review.  When button is clicked a text box shows and a post button.  When posted it is pushed to review list.  The creator and admin both have ability to edit and delete a review.  It needs to link to the attraction it is made on.  All other users signed in can only see the reviews.  Someone not signed in can not see the reviews, just sees a "sign in to see the reviews!" type of thing.

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showHomePage: true,
      showAttractionsIndex: false,

    }
  }

  seeAttractionClick = () => {
    this.setState({
      showAttractionsIndex: true,
      showHomePage: false
    })
  }

  seeAttractionShowPage = () => {
    this.setState({
      showAttractionsIndex: false
    })
  }

  seeHomePageClick = () => {
    this.setState({
      showAttractionsIndex: false,
      showHomePage: true
    })
  }

  logoutUser = async (event) => {
    const url = baseUrl + '/api/v1/users/logout'
    try{
      const response = await fetch(url, {
        credentials: "include",
        method: "GET"
      })
      const user = await response.json()
      console.log(user)
      if(response.status === 200){
        this.setState({
          currentUser: user
        })
      }
    }
    catch(err){
      console.log('Error: ', err);
    }
  }

  render(){
    console.log(this.state.currentUser)

    return(
      <div className="container">
        <NavBar currentUser={this.state.currentUser} baseUrl={baseUrl} seeAttractionClick={this.seeAttractionClick} seeHomePageClick={this.seeHomePageClick}/>
        <div>
        {
          this.state.showHomePage
          ?
          <>
            <AppHome />
            <button className="button" onClick={() => this.seeAttractionClick()}>See Attractions!</button>
          </>
          :
          <>
            <AttractionsIndex baseUrl={baseUrl} showAttractionsIndex={this.state.showAttractionsIndex} seeAttractionShowPage={this.seeAttractionShowPage}/>
            <div className="footer">
              <button className="button" onClick={() => this.seeHomePageClick()}>Back to Home</button>
            </div>
          </>

        }


        </div>

      </div>
    )
  }
}

export default App;
