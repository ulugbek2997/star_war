import '../../style/card.css'
import starShipImg from './starship.jpeg'
import { useState, useEffect } from "react";
function StarshipDetailes({item}){

  const [starship, setStarship] = useState([])

  useEffect(()=>{
    setStarship(item)
  })



  return(
    <div className="card d-flex">

        <div className="left">
          <div className="card_img">
            <img src={starShipImg} alt="" />
          </div>
        </div>
        <div className="right">
          <ul>
            <li>Name : {starship.name}</li>
            <li>Model : {starship.model}</li>
            <li>Passengers : {starship.passengers}</li>
          </ul>
        </div>
      </div>
  );
}

export default StarshipDetailes;