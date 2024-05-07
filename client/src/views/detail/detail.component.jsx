import './detail.styles.css';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail } from "../../redux/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from 'react-router-dom';

function Detail() {

  const dispatch=useDispatch();
  const dog=useSelector((state)=>state.dog);
  const {id}=useParams();
  const history=useHistory();

  function handleStart(e){
    e.preventDefault();
    history.push('/home')
  }

  useEffect(()=>{
    dispatch(getDetail(id));
    return ()=>{
      dispatch(cleanDetail())
    };
  },[dispatch,id])

  
  return (
    <div >
      <h1>Informacion adicional de la raza</h1>
      {/* <h2>{dog.id}</h2> */}
      <div className='navbar'>
        <button className="boton" onClick={handleStart}>Home</button>
      </div>
      <div className='detail-box'>
        <img className="image-detail" src={dog.reference_image_id} alt=""/>

        <div className='data-dog'>
          <h2>Nombre: {dog.name}</h2>
          <h2>Altura: {dog.height} cm.</h2>
          <h2>Peso: {dog.weight} kg.</h2>
          <h2>Temperamentos: {dog.temperament}</h2>
          <h2>Tiempo de vida: {dog.life_span}</h2>

        </div>

      </div>
      
      
    </div>
  );
}

export default Detail;