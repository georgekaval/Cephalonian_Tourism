import React from "react"

function AttractionShow(props){
  console.log(props.attraction)
  return(

    <div className="background">
      <img id='imageAttraction' src={props.attraction.image} alt={props.attraction.name}></img>
      <br></br>
      {props.attraction.name}
      <br></br>
      {props.attraction.location}
      <br></br>
      {props.attraction.info}
      <br></br>

    </div>
  )
}
 export default AttractionShow
