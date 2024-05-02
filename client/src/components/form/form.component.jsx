import './form.styles.css';

function Form({handleChange,handleSubmit,dog,errorsForm}){
    return(
    <div >
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" name="name" 
          value={dog.name} onChange={handleChange}/>
          {errorsForm.name?<span>{errorsForm.name}</span>:null}
        </div>
        <div>
          <label>Imagen</label>
          <input type="text" name="image" 
          value={dog.image} onChange={handleChange}/>
          {errorsForm.image?<span>{errorsForm.image}</span>:null}
        </div>
        <div>
          <label>Altura mínima</label>
          <input type="number" name="minHeight"
          value={dog.minHeight} onChange={handleChange}/>
          {errorsForm.minHeight?<span>{errorsForm.minHeight}</span>:null}
        </div>
        <div>
          <label>Altura máxima</label>
          <input type="number" name="maxHeight"
          value={dog.maxHeight} onChange={handleChange}/>
          {errorsForm.maxHeight?<span>{errorsForm.maxHeight}</span>:null}
        </div>
        <div>
          <label>Peso mínimo</label>
          <input type="number" name="minWeight"
          value={dog.minWeight} onChange={handleChange}/>
          {errorsForm.minWeight?<span>{errorsForm.minWeight}</span>:null}
        </div>
        <div>
          <label>Peso máximo</label>
          <input type="number" name="maxWeight"
          value={dog.maxWeight} onChange={handleChange}/>
          {errorsForm.maxWeight?<span>{errorsForm.maxWeight}</span>:null}
        </div>
        <div>
          <label>Años de vida</label>
          <input type="number" name="life_span"
          value={dog.life_span} onChange={handleChange}/>
          {errorsForm.life_span?<span>{errorsForm.life_span}</span>:null}
        </div>
        <div>
          <label>Temperamentos</label>
          <input type="text" name="temperament"
          value={dog.temperament} onChange={handleChange}/>
          {errorsForm.temperament?<span>{errorsForm.temperament}</span>:null}
        </div>
        <div>
          <button type='submit' onClick={handleSubmit}>Crear</button>
        </div>
      </form>
    </div>
    )
    

}

export default Form;