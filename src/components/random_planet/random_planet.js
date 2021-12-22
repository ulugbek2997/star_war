import './random_planet.css'
import planet from './planet.jpeg'
import { useState, useEffect } from 'react'

function RandomPlanet(){


  return(
    <div>
      <div className="container">
        <div className='random_planet_card container-sm d-flex'>
          <div className="left">
            <div className="left_img">
              <img src={planet} alt="" />
            </div>
          </div>

          <div className="right">
            <h4>Planet Name</h4>
            <ul>
              <li><span>Population :</span> <span></span> </li>
              <li><span>Rotation Period :</span> <span></span> </li>
              <li><span>Diameter :</span> <span></span> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomPlanet;
