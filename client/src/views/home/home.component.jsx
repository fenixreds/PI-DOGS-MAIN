import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDogs} from '../../redux/actions';

import './home.styles.css';

import Cards from "../../components/cards/cards.component";
import Navbar from "../../components/navbar/navbar.component";

function Home() {

  const dispatch=useDispatch();
  const allDogs=useSelector((state)=>state.allDogs);

  useEffect(()=>{
    dispatch(getDogs())//esto se ejecuta cuando inicia la pagina home
  },[dispatch])


  return (
    <div className='home' >
      <h1 className='home-title'>Razas de perros</h1>
      <Navbar/>
      <Cards allDogs={allDogs}/>
    </div>
  );
}

export default Home;