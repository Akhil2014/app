import React from "react";


const Headi = (props) => {
  return <div className="heading">
  <h1>{props.heading}</h1>
  <ul>
      <li>{props.li1}</li>
      <li>{props.li2}</li>
      <li>{props.li3}</li>
      <li>{props.li4}</li>
  </ul>
  </div> 
}



export default Headi;