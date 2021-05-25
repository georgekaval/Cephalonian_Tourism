import React from "react"

function AttractionShow(props){
  console.log(props.attractions);
  return(

    <div>
    <img id='imageAttraction' src={props.attractions.image} alt={props.attractions.name}></img>
    <br></br>
    {props.attractions.name}
    <br></br>
    {props.attractions.location}
    <br></br>
    {props.attractions.info}
    <br></br>
    </div>
  )
}
 export default AttractionShow
