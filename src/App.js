import './App.css';
import React, { Component } from 'react'
import AttractionsIndex from './components/AttractionsIndex'
import AppHome from './components/AppHome'
import NavBar from './components/NavBar'


console.log(process.env.NODE_ENV);
let baseUrl = "http://localhost:8000"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showHomePage: true,
      showAttractionsIndex: false,
      showAttractionShowPage: false,
      currentUser: ''
    }
  }
  // a few functions to help keep certain components hidden with my conditional rendering
  seeAttractionClick = () => {
    this.setState({
      showAttractionsIndex: true,
      showHomePage: false,
      showAttractionShowPage: false
    })
  }

  hideAttractionIndexPage = () => {
    this.setState({
      showAttractionsIndex: false,
      showAttractionShowPage: true
    })
  }

  showEditPage = () => {
    this.setState({
      showAttractionsIndex: false
    })
  }

  showIndexPageFromEdit = () => {
    this.setState({
      showAttractionsIndex: true
    })
  }

  hideAttractionShowPage = () => {
    this.setState({
      showAttractionShowPage: false,
      showAttractionsIndex: true
    })
  }

  seeHomePageClick = () => {
    this.setState({
      showAttractionsIndex: false,
      showHomePage: true
    })
  }

  userIsFound = (user) => {
    this.setState({
      currentUser: user
    })
  }

  render(){
    console.log(this.state.currentUser)

    return(
      <div>
        <NavBar currentUser={this.state.currentUser} baseUrl={baseUrl} seeAttractionClick={this.seeAttractionClick} seeHomePageClick={this.seeHomePageClick} userIsFound={this.userIsFound}/>
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
            <AttractionsIndex baseUrl={baseUrl}  hideAttractionIndexPage={this.hideAttractionIndexPage} hideAttractionShowPage={this.hideAttractionShowPage} showAttractionShowPage={this.state.showAttractionShowPage} showAttractionsIndex={this.state.showAttractionsIndex} showEditPage={this.showEditPage} showIndexPageFromEdit={this.showIndexPageFromEdit} currentUser={this.state.currentUser}/>
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
