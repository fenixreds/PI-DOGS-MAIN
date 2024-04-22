import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getByName, getDogs} from '../../redux/actions';

import './home.styles.css';

import Cards from "../../components/cards/cards.component";
import Navbar from "../../components/navbar/navbar.component";

function Home() {

  const dispatch=useDispatch();
  const allDogs=useSelector((state)=>state.allDogs);

  //se crea un estado local para manejar el boton buscar
  const [searchString,setSearchString]=useState("");

  function handleChange(e){
    e.preventDefault();//para que la pagina no se refresca despues de la busqueda
    setSearchString(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(getByName(searchString))
  }
  
  useEffect(()=>{
    dispatch(getDogs())//esto se ejecuta cuando inicia esta pagina home
  },[dispatch])//???


  return (
    <div className='home' >
      <h1 className='home-title'>Razas de perros</h1>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Cards allDogs={allDogs}/>
    </div>
  );
}

export default Home;