import './style/standars_styles.css'
import Navbar from "./components/navbar/navbar";
import RandomPlanet from './components/random_planet/random_planet';
import { useEffect, useState } from 'react';
import PersonDetailes from './components/person-details/person_details';
import Main from './components/main/main';
import SwapiService from './service/service';

function App() {

  const [status, setStatus] = useState(false);


  function renderList(name){
    setStatus(name)
  }

  console.log(status);

  return (
    <div className="App bg-dark">
      <Navbar renderFun={renderList}/>
      <RandomPlanet />

     {status && <Main status={status} />}
    </div>
  );
}

export default App;
