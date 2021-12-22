import './list.css'

function List({items, setItem}){

  const elements = items.map((item)=>{
    return(
      <li onClick={()=> setItem(item)}>{item.name}</li>
    );
  })

  return(

        <div className="list">
        <ul>
        {elements}
          </ul>
        </div>
  );
}

export default List;