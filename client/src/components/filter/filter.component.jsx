import { useSelector } from "react-redux";

function Filter({handleTemperament,handleOrigin}){

    const temperaments=useSelector((state)=>state.temperaments);

    return(
        <div>
            <select 
                placeholder="Temperamento" onChange={handleTemperament}>
                    <option value="all">Todos</option>
                    {temperaments.map((temp)=>(
                        <option key={temp.id} value={temp.name}>{temp.name}</option>
                    ))}   
            </select>
            <select
                placeholder="Origen" onChange={handleOrigin}>
                    <option value="all">Todos</option>
                    <option value="false">Api</option>
                    <option value="true">Creados</option>                
            </select>
        </div>
        
    )
}

export default Filter;