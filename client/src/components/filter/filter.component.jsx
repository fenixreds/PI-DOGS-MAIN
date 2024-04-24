

function Filter({handleFilter}){
    return(
        <div>
            <select 
                placeholder="Temperamento" onChange={handleFilter}>
                    {["Male","Female","unknown","Genderless"].map((gender)=>(
                        <option key={gender} value={gender}>{gender}</option>
                    ))}   
            </select>
        </div>
    )
}

export default Filter;