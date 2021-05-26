import React from "react"

function AttractionShow(props){
  console.log(props.attraction)
  return(

    <div className="background">
      <h3 className="text">{props.attraction.data.name}</h3>
      <br></br>
      <img className='showImage' src={props.attraction.data.image} alt={props.attraction.data.name}></img>
      <br></br>
      <h3 className="text">{props.attraction.data.location}</h3>
      <br></br>
      <p className="text">{props.attraction.data.info}</p>
      <br></br>

    </div>
  )
}
 export default AttractionShow
