import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getByName, getDogs} from '../../redux/actions';

import './home.styles.css';

import Cards from "../../components/cards/cards.component";
import Navbar from "../../components/navbar/navbar.component";
import Pagination from '../../components/pagination/pagination.component';

function Home() {

  const dispatch=useDispatch();
  const allDogs=useSelector((state)=>state.allDogs);

  //se crean los parametros para el paginado
  const [currentPage,setCurrentPage]=useState(1);
  const recordsPerPage=8;
    const lastIndex=currentPage * recordsPerPage;
    const firstIndex=lastIndex-recordsPerPage;
    const records=allDogs.slice(firstIndex,lastIndex);



  //se crea un estado local para manejar el boton buscar
  const [searchString,setSearchString]=useState("");

  //Funciones Navbar
  function handleChange(e){
    e.preventDefault();//para que la pagina no se recargue despues de la busqueda
    setSearchString(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(getByName(searchString))
  }
  
  //Funciones Pagination
  function prePage(e){
    e.preventDefault();
  }

  function changeCpage(e){
    e.preventDefault();
  }

  function nextPage(e){
    e.preventDefault();
  }


  useEffect(()=>{
    dispatch(getDogs())//esto se ejecuta cuando inicia esta pagina home
  },[dispatch])//????


  return (
    <div className='home' >
      <h1 className='home-title'>Razas de perros</h1>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Cards allDogs={allDogs}/>
      <Pagination prePage={prePage} changeCpage={changeCpage} nextPage={nextPage}/>
    </div>
  );
}

export default Home;