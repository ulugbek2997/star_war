import '../../style/card.css';
import personImg from './person.jpg';
import { useState, useEffect } from "react";


function PersonDetailes({item}){
  
   
   const [person, setPerson] = useState([])

  useEffect(()=>{
    setPerson(item)
  })



  return(
  
    <div className="card d-flex">

        <div className="left">
          <div className="card_img">
            <img src={personImg} alt="" />
          </div>
        </div>
        <div className="right">
          <ul>
            <li>Name : {person.name}</li>
            <li>Birth Year :{person.birthYear}</li>
            <li>Gender : {person.gender}</li>
          </ul>
        </div>
      </div>
  );
}

export default PersonDetailes;