import './sorter.styles.css';

function Sorter({handleOrderBy,handleChangeOrder}){

    return(
        <div className='sorter-box'>
            <label>Orden por: </label>
            <label>Categoria </label>
            <select className='select'
                placeholder="OrderBy" onChange={handleOrderBy}>
                    <option value="Ninguno">---</option>
                    <option value="Name">Nombre</option>
                    <option value="Weight">Peso</option>
            </select>
           
            <select className='select'
                placeholder="Name" onChange={handleChangeOrder}>
                    <option value="Ninguno">---</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
            </select>

            
        </div>
    )

}

export default Sorter;