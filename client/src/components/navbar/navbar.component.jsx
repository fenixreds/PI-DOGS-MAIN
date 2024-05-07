import './navbar.styles.css';

function Navbar({handleChange,handleSubmit,handleCreate,handleOut}){
    return(
        
        <div className="search-box">
            <div>
                <button className="boton" onClick={handleCreate}>Crear nueva Raza</button>
            </div>
            <form className="search"onChange={handleChange}>
                <input className="input" placeholder='Busqueda' type='search'></input>
                <button className="boton-buscar" type='submit' onClick={handleSubmit}>Buscar</button>
            </form>
            <div>
                <button className="boton" onClick={handleOut}>Salir</button>
            </div>
        </div>
    )
}

export default Navbar;