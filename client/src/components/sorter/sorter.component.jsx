
function Sorter({handleOrderBy,handleChangeOrder}){

    return(
        <div>
            <select
                placeholder="OrderBy" onChange={handleOrderBy}>
                    <option value="Ninguno">---</option>
                    <option value="Name">Nombre</option>
                    <option value="Weight">Peso</option>
            </select>

            <select
                placeholder="Name" onChange={handleChangeOrder}>
                    <option value="Ninguno">---</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
            </select>

            {/* <select
                placeholder="Weight" onChange={handleWeight}>
                    <option value="Ninguno">---</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>

            </select> */}
        </div>
    )

}

export default Sorter;