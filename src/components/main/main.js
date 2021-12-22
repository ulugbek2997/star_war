import './main.css'
import List from "../list/list";
import PersonDetailes from "../person-details/person_details";
import { useState, useEffect } from "react";
import PlanetDetailes from '../planet-details/planet_details';
import StarshipDetailes from '../starship-details/starship_details';
import SwapiService from '../../service/service';
function Main({status}){
  
  const service= new SwapiService();
  const [linkItems, setLinkItems] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(()=>{
    async function show(){
      switch(status){
        case 'persons': setLinkItems(await service.getAllPersons());break;
        case 'planets': setLinkItems(await service.getAllPlanets());break;
        case 'starships': setLinkItems(await service.getAllStarships());break;
      }
    };    
   show(); 
  },[status])

   function ItemMain(item){
      setItem(item)
   }


  return(
    <div className="main">
      <div className="container">
        <div className="container-sm">
        <List items={linkItems} setItem={setItem}/>
        {status == 'persons'&& <PersonDetailes item={item} />}
        {status == 'planets'&& <PlanetDetailes item={item} />  }
        {status == 'starships'&& <StarshipDetailes item={item} /> }
          </div>
      </div>
    </div>
  );
}

export default Main;