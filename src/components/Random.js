<ul>
  {this.state.attractions.data.map(attraction => {
    return(

      <div key={attraction.id}>
        <li>
          <img id='imageAttraction' src={attraction.image} alt={attraction.name}></img>
          <br></br>
          {attraction.name}
          <br></br>
          {attraction.location}
          <br></br>
          {attraction.info}
          <br></br>
        </li>
      </div>

    )
  })}
</ul>



{props.attractions.map(attraction => {
  return(

    <div key={attraction._id}>

      <img id='imageAttraction' src={attraction.image} alt={attraction.name}></img>
      <br></br>
      {attraction.name}
      <br></br>
      {attraction.location}
      <br></br>
      {attraction.info}
      <br></br>

    </div>

  )
})}

<AttractionShow key={this.state.attractions._id} attractions={this.state.attractions}/>

<ul>
  {this.state.attractions.data.map(attraction => {
    return(
      <>
       <AttractionsIndex key={attraction._id} attractions={attraction} baseUrl={this.props.baseUrl}/>
      </>
    )
  })}
</ul>
<button onClick={() => this.handleClick()}><img id='imageAttraction' src={this.state.attractions.image} alt={this.state.attractions.name}></img></button>
 {this.state.attractions.name}

 showPageState = (attraction) => {
   this.setState({
     attractionToBeShown: attraction
   })
 }
