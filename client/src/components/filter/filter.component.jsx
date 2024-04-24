import { useSelector } from "react-redux";

function Filter({handleFilter}){

    const temperaments=useSelector((state)=>state.temperaments);

    return(
        <div>
            <select 
                placeholder="Temperamento" onChange={handleFilter}>
                    {temperaments.map((temp)=>(
                        <option key={temp.id} value={temp.name}>{temp.name}</option>
                    ))}   
            </select>
        </div>
    )
}

export default Filter;