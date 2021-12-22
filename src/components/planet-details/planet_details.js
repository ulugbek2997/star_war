import '../../style/card.css'
import planetImg from './saturn.jpeg'
import { useState, useEffect } from "react";

function PlanetDetailes({item}){

  const [planet, setPlanet] = useState([])

   useEffect(()=>{
    setPlanet(item)
  })


  return(
    <div className="card d-flex">

        <div className="left">
          <div className="card_img">
            <img src={planetImg} alt="" />
          </div>
        </div>
        <div className="right">
          <ul>
            <li>Name : {planet.name}</li>
            <li>Population : {planet.population}</li>
            <li>Diameter : {planet.diameter}</li>
            <li>Gravity : {planet.gravity}</li>
          </ul>
        </div>
      </div>
  );
}

export default PlanetDetailes;