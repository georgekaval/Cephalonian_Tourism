import React, { Component } from 'react'

class AppHome extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  // trying out a background image
  //        <img className="homeImage" alt="home" src="https://www.greece-is.com/wp-content/uploads/2016/07/KEFALONIA-fiskardo-06.jpg"></img>
  render(){
    return(
      <div className="container">
        <div className="homeImageAndHeader">
          <h1 className="header"> Kefalonia </h1>
        </div>
        <p className="text info">Ideally located in the heart of the Ionian sea, Kefalonia Greece has inspired many with its beauty and has been the filming location of the famous movie “Captain Corelli’s Mandolin”. Indeed, wherever you set your eyes on, you’ll see nature at its best! Kefalonia is not only the biggest Greek island of the Ionian but also one of the most beautiful ones! Boasting a breathtaking natural landscape with exotic beaches, picturesque fishing villages and magical underground caves, Kefalonia is one of the best destinations in Greece for nature lovers!
        </p>
        <p className="text info">
        Worldwide famous for its scenic beaches (as Myrtos, Antisamos, Lourdas, Skala), dramatic landscapes and delicious food, the island attracts and bewitches thousands of visitors. Indigo bays, enchanting villages (Fiscardo, Argostoli, Sami, Assos), white dazzling sand, exciting activities, mysterious caves, and lively atmosphere create an exotic holiday paradise in the middle of the Ionian sea.
        </p>
        <p className="text info">
        The main reason why people keep on coming to Kefalonia is, without any doubt, its wonderful beaches. Sure, some beaches always look good on pictures, but Kefalonia’s most photographed beaches look even better in real life! From Myrtos, an idyllic sandy beach backed with towering cliffs, to Petani, Xi, Skala and Makris Gialos, every Kefalonia beach will steal your breath!
        </p>
        <p className="text info">
        As for Kefalonia villages, they ooze charm in abundance! Apart from the capital of the island, Argostoli, don’t miss to visit the tiny villages of Fiskardo and Assos, during your Kefalonia holidays. Take in the magical scenery, stroll around their little harbors and, of course, sit at a tavern to taste the yummy local delicacies… You’ll forget- even just for a while- the sounds of the city!
        </p>
      </div>
    )
  }
}

export default AppHome
