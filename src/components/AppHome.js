import React, { Component } from 'react'

class AppHome extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <div>

        <h1 className="text header"> Cephalonia </h1>
        <img className="homeImage" alt="home" src="https://www.greece-is.com/wp-content/uploads/2016/07/KEFALONIA-fiskardo-06.jpg"></img>
        <p className="text info" >
         The island of Cephalonia in Greece is truly a gem that charms all who come to spend their holidays here.
        Cephalonia is a very big island and for this reason it's able to satisfy every kind of tourist, from the most active, to those who dream of a relaxing stay.
        Cephalonia will make special your stay in Greece, fascinating you with its clear sea with wonderful colors, with its hidden coves, its caves, its picturesque villages and its breathtaking views.
        Here in Cephalonia the sea is really gorgeous, but your vacation can reserve you pleasant surprises such as scenic walks in the countryside, visits to particular geological phenomena and the discovery of a long history.
        </p>
      </div>
    )
  }
}

export default AppHome
