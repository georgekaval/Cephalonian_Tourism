import React, { Component } from 'react'
import AttractionShow from './AttractionShow'

class AttractionsIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAttractionShowPage: false,
      showAttractionIndex: true
    }
  }

  handleClick = () => {
    this.setState({
      showAttractionShowPage: true,
      showAttractionIndex: false
    })
  }

  render(){
    console.log(this.props.attractions);
    return(
      <>
        {
          this.state.showAttractionIndex &&
          <ul>
            <button onClick={() => this.handleClick()}><img id='imageAttraction' src={this.props.attractions.image} alt={this.props.attractions.name}></img></button>
             {this.props.attractions.name}
          </ul>
        }

        {
          this.state.showAttractionShowPage &&
          <AttractionShow key={this.props.attractions._id} attractions={this.props.attractions}/>
        }

      </>
    )
  }
}

export default AttractionsIndex
