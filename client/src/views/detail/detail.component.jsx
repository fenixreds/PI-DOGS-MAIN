//import './detail.styles.css';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Detail() {

  const dispatch=useDispatch();
  const dog=useSelector((state)=>state.dog);
  const {id}=useParams();

  useEffect(()=>{
    dispatch(getDetail(id))
  },[id])

  
  return (
    <div >
      <h1>Informacion adicional</h1>
      <h2>{dog.id}</h2>
      <h2>{dog.reference_image_id}</h2>
      <h2>{dog.name}</h2>
      <h2>{dog.height}</h2>
      <h2>{dog.weight}</h2>
      <h2>{dog.temperament}</h2>
      <h2>{dog.life_span}</h2>
    </div>
  );
}

export default Detail;