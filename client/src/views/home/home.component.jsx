import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterOriginTemperament, getByName, getDogs, getRenderDogs, getTemperaments, sortName, sortWeight} from '../../redux/actions';

import './home.styles.css';

import Cards from "../../components/cards/cards.component";
import Navbar from "../../components/navbar/navbar.component";
import Pagination from '../../components/pagination/pagination.component';
import Filter from '../../components/filter/filter.component';
import Sorter from '../../components/sorter/sorter.component';

function Home() {

  const dispatch=useDispatch();
  const allDogs=useSelector((state)=>state.allDogs);
  const renderDogs=useSelector((state)=>state.renderDogs);

  //se crean los parametros para el paginado
  const [currentPage,setCurrentPage]=useState(1);

  const recordsPerPage=8;
  const npage =Math.ceil(allDogs.length/recordsPerPage);
  



  //se crea un estado local para manejar el boton buscar
  const [searchString,setSearchString]=useState("");

  //se crea un estado local para manejar los filtrados
  const [fTemperament,setFTemperament]=useState("all");
  const [fOrigin,setFOrigin]=useState("all");

  //estado local para el ordenamiento
  const [orderBy,setOrderBy]=useState("Ninguno");
  const [changeOrder,setChangeOrder]=useState("Ninguno");
  

  //estado local para renderizar despues de ordenar
  const [sortFinish,setSortFinish]=useState("");
  

  //Funciones Navbar
  function handleChange(e){
    e.preventDefault();//para que la pagina no se recargue despues de la busqueda
    setSearchString(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(getByName(searchString));
    setCurrentPage(1);//cuando haga nueva busqueda el paginado regrese a la primera
  }
  
  //Funciones Pagination
  function prePage(e){
    e.preventDefault();
    if(currentPage!==1){
      setCurrentPage(currentPage-1);
    }
  }

  function changeCpage(e){
    e.preventDefault();
    setCurrentPage(Number((e.target).textContent))
  }

  function nextPage(e){
    e.preventDefault();
    if(currentPage!==npage){
      setCurrentPage(currentPage+1);
    }
  }

  //Funciones Filtrado
  function handleTemperament(e){
    e.preventDefault();
    setFTemperament(e.target.value);
    setCurrentPage(1);
  }

  function handleOrigin(e){
    e.preventDefault();
    setFOrigin(e.target.value);
    setCurrentPage(1);
  }

  //Funciones Ordenamiento
  function handleOrderBy(e){
    e.preventDefault();
    setOrderBy(e.target.value);
    
  }

  function handleChangeOrder(e){
    e.preventDefault();
    setChangeOrder(e.target.value);
  }




  //Para manejar el ciclo de vida del componente
  useEffect(()=>{
    dispatch(getDogs());//esto se ejecuta cuando inicia esta pagina home
    dispatch(getTemperaments());
  },[dispatch]);

  useEffect(()=>{
    console.log("entre al renderDogs");
    dispatch(getRenderDogs(currentPage,recordsPerPage));//se ejecuta despues que se completa el anterior useEffect   
  },[dispatch,currentPage,allDogs,sortFinish]);

  

  useEffect(()=>{
    dispatch(filterOriginTemperament(fOrigin,fTemperament));

    if(orderBy==="Name"){
      dispatch(sortName(changeOrder));
      setCurrentPage(1);
      setSortFinish(orderBy+changeOrder);
      
    }else if(orderBy==="Weight"){
      dispatch(sortWeight(changeOrder));
      setCurrentPage(1);
      setSortFinish(orderBy+changeOrder);
    }

  },[dispatch,fTemperament,fOrigin,orderBy,changeOrder]);

 

  return (
    <div className='home' >
      <h1 className='home-title'>Razas de perros</h1>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Filter handleTemperament={handleTemperament} handleOrigin={handleOrigin}/>
      <Sorter handleOrderBy={handleOrderBy} handleChangeOrder={handleChangeOrder}/>
      <Cards renderDogs={renderDogs}/>
      <Pagination prePage={prePage} changeCpage={changeCpage} nextPage={nextPage} recordsPerPage={recordsPerPage}/>
      
    </div>
  );
}

export default Home;