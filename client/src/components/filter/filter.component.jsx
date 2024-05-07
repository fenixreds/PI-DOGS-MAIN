import { useSelector } from "react-redux";
import './filter.styles.css';

function Filter({handleTemperament,handleOrigin}){

    const temperaments=useSelector((state)=>state.temperaments);

    return(
        <div className="filter-box">
            <label>Filtrado por:  </label>
            <label>Temperamento</label>
            <select className="select"
                 onChange={handleTemperament}>
                    <option value="all">Todos</option>
                    {temperaments.map((temp)=>(
                        <option key={temp.id} value={temp.name}>{temp.name}</option>
                    ))}   
            </select>

            <label>Origen</label>
            <select className="select"
                 onChange={handleOrigin}>
                    <option value="all">Todos</option>
                    <option value="false">Api</option>
                    <option value="true">Creados</option>                
            </select>
        </div>
        
    )
}

export default Filter;