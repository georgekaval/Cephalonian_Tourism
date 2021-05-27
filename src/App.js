import './App.css';
import React, { Component } from 'react'
import Attractions from './components/Attractions'
import AppHome from './components/AppHome'
import NavBar from './components/NavBar'


console.log(process.env.NODE_ENV);
let baseUrl = "http://localhost:8000"

//App component will be home page and hold these children:  IndexAttraction,  NavBar, AppHome, stretch goal favorites list.

//IndexAttraction will have a list of AttractionPage components as buttons

// AttractionPage component will hide Apphome and keep NavBar, and will hold these children: Reviews, AttractionShow, stretch google maps. Putting reviews as a child here so the reviews can be connected with their specific attraction.

//AttractionShow: will have info of attraction.  Need to have the ability to edit and delete attractions if the user is an admin

// Review component holds state and the list of reviews, then have ReviewPost component as each individual review.  Can have a add function in the review component that I pass down to the ReviewPost components. Should I have state in the review component?  Why should i lift up state? Maybe the review component can just hold all the reviews in a list, and each review keep their own state?   Need to make a review component that shows the current reviews list on the attraction and has a button to add review.  When button is clicked a text box shows and a post button.  When posted it is pushed to review list.  The creator and admin both have ability to edit and delete a review.  It needs to link to the attraction it is made on.  All other users signed in can only see the reviews.  Someone not signed in can not see the reviews, just sees a "sign in to see the reviews!" type of thing.

// AppHome component will be the main image and info about kefalonia.  Most of the home page type stuff I have in mind, need to figure out how to change pages without using modals.

//NavBar will hold these children: LogIn, SignUp, LogOut, HomeScreenIcon

// Have a ternary operator for if the user is signed in or not and what they should see for that.  Then want there to be the users name on top instead of the sign up and log in, and also a log out option that removes the session.

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showHomePage: true,
      showAttractionsPage: false,
      

    }
  }

  seeAttractractionClick = () => {
    this.setState({
      showAttractionsPage: true,
      showHomePage: false
    })
  }

  seeHomePageClick = () => {
    this.setState({
      showAttractionsPage: false,
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
        <NavBar currentUser={this.state.currentUser} baseUrl={baseUrl}/>
        <div>
        {
          this.state.showHomePage
          ?
          <AppHome />
          :
          this.state.showAttractionsPage &&
          <Attractions baseUrl={baseUrl} />
        }
        {
          this.state.showHomePage
          ?
          <button className="button" onClick={() => this.seeAttractractionClick()}>See Attractions!</button>
          :
          <div className="footer">
            <button className="button" onClick={() => this.seeHomePageClick()}>Back to Home</button>
          </div>
        }


        </div>

      </div>
    )
  }
}

export default App;
