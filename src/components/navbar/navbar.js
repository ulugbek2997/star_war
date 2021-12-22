import './style.css'
function Navbar({renderFun}){




  return(
  <div>
    <div className='container'>
    <nav className='container-sm'>
      <ul>
        <li>
          <a href=""><h2>Star DB</h2></a>
        </li>
        <li><button onClick={()=>renderFun('persons')} href="">Persons</button></li>
        <li><button onClick={()=>renderFun('planets')} href="">Planets</button></li>
        <li><button onClick={()=>renderFun('starships')} href="">Starships</button></li>
      </ul>
    </nav>
    </div>
  </div>
  );
}


export default Navbar;