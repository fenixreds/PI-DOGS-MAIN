
function Sorter({handleName,handleWeight}){

    return(
        <div>
            <select
                placeholder="Name" onChange={handleName}>
                    <option value="Ninguno">---</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
            </select>

            <select
                placeholder="Weight" onChange={handleWeight}>
                    <option value="Ninguno">---</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>

            </select>
        </div>
    )

}

export default Sorter;