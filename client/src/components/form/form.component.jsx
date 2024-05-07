import { useSelector } from 'react-redux';
import './form.styles.css';


function Form({handleChange,handleTemperament,handleSubmit,handleTempReset,dog,errorsForm,handleHome,handleOut}){

  const temperaments=useSelector((state)=>state.temperaments);

    return(
    <div >
      <form className='form'>

        <div className='navbar'>
          <div>
            <button className="boton" onClick={handleHome}>Home</button>
          </div>
          <div>
            <button className="boton" type='submit' onClick={handleSubmit}>Crear</button>
          </div>
          <div>
            <button className="boton" onClick={handleOut}>Salir</button>
          </div>
        </div>


        <div className='form-box'>
        <div className='form-text'>
          <div className='item'>
            <label className='label'>Nombre</label>
            <input type="text" name="name" 
            value={dog.name} onChange={handleChange}/>
            {errorsForm.name?<span>{errorsForm.name}</span>:null}
          </div>
          <div className='item'>
            <label className='label'>Imagen</label>
            <input type="text" name="image" 
            value={dog.image} onChange={handleChange}/>
            {errorsForm.image?<span>{errorsForm.image}</span>:null}
          </div>
          <div className='item'>
            <label className='label'>Altura mínima</label>
            <input type="number" name="minHeight"
            value={dog.minHeight} onChange={handleChange}/>
            {errorsForm.minHeight?<span>{errorsForm.minHeight}</span>:null}
          </div>
          <div className='item'>
            <label className='label'>Altura máxima</label>
            <input type="number" name="maxHeight"
            value={dog.maxHeight} onChange={handleChange}/>
            {errorsForm.maxHeight?<span>{errorsForm.maxHeight}</span>:null}
          </div>
          <div className='item'>
            <label className='label'>Peso mínimo</label>
            <input type="number" name="minWeight"
            value={dog.minWeight} onChange={handleChange}/>
            {errorsForm.minWeight?<span>{errorsForm.minWeight}</span>:null}
          </div>
          <div className='item'>
            <label className='label'>Peso máximo</label>
            <input type="number" name="maxWeight"
            value={dog.maxWeight} onChange={handleChange}/>
            {errorsForm.maxWeight?<span>{errorsForm.maxWeight}</span>:null}
          </div>
          <div className='item'>
            <label className='label'>Años de vida</label>
            <input type="number" name="life_span"
            value={dog.life_span} onChange={handleChange}/>
            {errorsForm.life_span?<span>{errorsForm.life_span}</span>:null}
          </div>
          <div className='item'>
            <label className='label'>Temperamentos</label>
            <select 
                  placeholder="Temperamento" onChange={handleTemperament}>
                      
                      {temperaments.map((temp)=>(
                          <option key={temp.id} title="temperament" value={temp.id}>{temp.name}</option>
                      ))}   
            </select>
            
            {errorsForm.temperament?<span>{errorsForm.temperament}</span>:null}
          </div>
          <div className='item'>  
            <button onClick={handleTempReset}>Borrar Temperamentos</button>
            {
              (dog.temperament.length>0)
              ?(dog.temperament.map((tempSelect)=>(
                <label  key={tempSelect}>{temperaments[tempSelect-1].name} - </label>
              ))):null
            }
          </div>

        </div>

        </div>

        

        

        
        
      </form>
    </div>
    )
    

}

export default Form;