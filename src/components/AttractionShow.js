import React from "react"

function AttractionShow(props){
  console.log(props.attractions);
  console.log(props.attractions.data);
  return(

    <div>
      {props.attractions.data.map(attraction => {
        return(
          <div ket={attraction._id}>
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

    </div>
  )
}
 export default AttractionShow
