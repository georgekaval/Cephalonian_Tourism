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

key={this.props.attractions._id} attractions={this.props.attractions}
