import './App.css';
import React, { Component } from 'react'
import AttractionsIndex from './components/AttractionsIndex'
import AppHome from './components/AppHome'
import NavBar from './components/NavBar'


console.log(process.env.NODE_ENV);
// let baseUrl = ""
// if(process.env.NODE_ENV === 'development'){
//   baseUrl = "http://localhost:8000"
// } else {
//   baseUrl = process.env.REACT_APP_BASEURL
// }
let baseUrl = process.env.REACT_APP_BASEURL

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showHomePage: true,
      showAttractionsIndexPage: false,
      showAttractionShowPage: false,
      currentUser: '',
      admin: false
    }
  }
  // a few functions to help keep certain components hidden with my conditional rendering

  // Used to go from home page to attractions index page.
  seeAttractionIndexPage = () => {
    this.setState({
      showAttractionsIndexPage: true,
      showHomePage: false,
      showAttractionShowPage: false
    })
  }

  // Used to go to an attraction show page from the index page.
  seeAttractionShowPage = () => {
    this.setState({
      showAttractionsIndexPage: false,
      showAttractionShowPage: true,
      showHomePage: false
    })
  }

  // Used to hide index page and just show an edit form.
  seeEditPage = () => {
    this.setState({
      showAttractionsIndexPage: false
    })
  }

  // Used to go back to the edit page when submitting the edit form.
  seeIndexPageFromEdit = () => {
    this.setState({
      showAttractionsIndexPage: true
    })
  }

  // Used to go back to home screen from anywhere in the app.
  seeHomePageClick = () => {
    this.setState({
      showAttractionsIndexPage: false,
      showAttractionShowPage: false,
      showHomePage: true
    })
  }

  userIsFound = (user) => {
    this.setState({
      currentUser: user,
      admin: user.data.admin
    })
  }

  // Need a toggle so when a new review is created, it stays on attraction show page.
  // If you put the wrong username or password in, the frontend still acts like logged in ex. says Hello !
  // Need to fix how create review looks
  // Need to fix how reviews look
  render(){
    console.log(this.state.currentUser)

    return(
      <div>
        <NavBar
        currentUser={this.state.currentUser}
          baseUrl={baseUrl}
          seeAttractionIndexPage={this.seeAttractionIndexPage} s
          eeHomePageClick={this.seeHomePageClick}
          userIsFound={this.userIsFound}
        />
        <div>
        {
          this.state.showHomePage
          ?
          <>
            <AppHome />
            <button className="button" onClick={() => this.seeAttractionIndexPage()}>See Attractions!</button>
          </>
          :
          <>
            <AttractionsIndex
              baseUrl={baseUrl}
              seeAttractionShowPage={this.seeAttractionShowPage}
              showAttractionShowPage={this.state.showAttractionShowPage}
              showAttractionsIndexPage={this.state.showAttractionsIndexPage}
              showEditPage={this.seeEditPage}
              seeIndexPageFromEdit={this.seeIndexPageFromEdit}
              currentUser={this.state.currentUser}
              seeAttractionIndexPage={this.seeAttractionIndexPage}
              admin={this.state.admin}

            />
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
