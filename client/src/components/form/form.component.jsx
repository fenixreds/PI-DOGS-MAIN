import './form.styles.css';

function Form({handleChange,handleSubmit,dog}){
    return(
    <div >
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" name="name" 
          value={dog.name} onChange={handleChange}/>
        </div>
        <div>
          <label>Imagen</label>
          <input type="text" name="image" 
          value={dog.image} onChange={handleChange}/>
        </div>
        <div>
          <label>Altura mínima</label>
          <input type="number" name="minHeight"
          value={dog.minHeight} onChange={handleChange}/>
        </div>
        <div>
          <label>Altura máxima</label>
          <input type="number" name="maxHeight"
          value={dog.maxHeight} onChange={handleChange}/>
        </div>
        <div>
          <label>Peso mínimo</label>
          <input type="number" name="minWeight"
          value={dog.minWeight} onChange={handleChange}/>
        </div>
        <div>
          <label>Peso máximo</label>
          <input type="number" name="maxWeight"
          value={dog.maxWeight} onChange={handleChange}/>
        </div>
        <div>
          <label>Años de vida</label>
          <input type="number" name="life_span"
          value={dog.life_span} onChange={handleChange}/>
        </div>
        <div>
          <label>Temperamentos</label>
          <input type="text" name="temperament"
          value={dog.temperament} onChange={handleChange}/>
        </div>
        <div>
          <button type='submit' onClick={handleSubmit}>Crear</button>
        </div>
      </form>
    </div>
    )
    

}

export default Form;