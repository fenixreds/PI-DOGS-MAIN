import { useState,useEffect } from "react";
import {useHistory} from 'react-router-dom';
import Form from "../../components/form/form.component";
import { useDispatch, useSelector } from "react-redux";
import { cleanCreateDog, cleanError, createDog, getTemperaments } from "../../redux/actions";
import validate from "../../components/validations/validation";


function Create() {

  const dispatch=useDispatch();
  const history=useHistory();

  const createdNewDog=useSelector((state)=>state.createdNewDog);
  const error=useSelector((state)=>state.error);

  const [newDog,setDog]=useState({
    name:"",
    image:"",
    minHeight:"",
    maxHeight:"",
    minWeight:"",
    maxWeight:"",
    life_span:"",
    temperament:[],

  });

  const [errorsForm,setErrorsForm]=useState({
    name:"",
    image:"",
    minHeight:"",
    maxHeight:"",
    minWeight:"",
    maxWeight:"",
    life_span:"",
    temperament:"",
  })

  
  function handleChange(e){
    e.preventDefault();
    
    setDog({
      ...newDog,
      [e.target.name]:e.target.value,
    });

    setErrorsForm(
      validate({
        ...newDog,
        [e.target.name]:e.target.value,
      })
    );
  
  }

  function handleTemperament(e){
    e.preventDefault();
    
    if(newDog.temperament.includes(e.target.value)){
      window.alert("Ya agrego este temperamento");
    }
    else{
      setDog({
        ...newDog,
        temperament:[...newDog.temperament,e.target.value]
      })
  
      setErrorsForm(
        validate({
          ...newDog,
          temperament:e.target.value
        })
      )
    }


    
  }

  function completedForm(){
    return Object.values(newDog).every(valor=>valor!=="")&&
    Object.values(errorsForm).every(valor=>valor==="");
  }

  function handleSubmit(e){
    e.preventDefault();

    if(completedForm()){
      
      const newSelectDog={
        reference_image_id:newDog.image,
        name:newDog.name,
        height:newDog.minHeight+" - "+newDog.maxHeight,
        weight:newDog.minWeight+" - "+newDog.maxWeight,
        life_span:newDog.life_span+" years",
        temperamentId:newDog.temperament.join()
      }
      
      dispatch(createDog(newSelectDog));
    }else{
      
      window.alert("La raza ya existe o faltan datos");
      
    }
      
  }

  function handleTempReset(e){
    e.preventDefault();

    setDog({
      ...newDog,
      temperament:[]
    })

    setErrorsForm(
      validate({
        ...newDog,
        temperament:""
      })
    )
  }

  function handleHome(e){
    e.preventDefault();
    history.push('/home');
  };

  function handleOut(e){
    e.preventDefault();
    history.push('/landing')
  };

  useEffect(()=>{
    dispatch(getTemperaments());
    
    return ()=>{
      dispatch(cleanCreateDog());
      dispatch(cleanError());
      
    };
  },[dispatch])

  useEffect(()=>{
    if(createdNewDog.status===200){
      window.alert("La nueva raza fue creada exitosamente");
      history.push('/home')
    }else if(error.response){
      window.alert("La raza ya existe o faltan datos");  
    }  
  },[dispatch,createdNewDog,error,history]);
  

  return(
    <div>
      <h1>Ingrese informacion de la nueva raza</h1>
      <Form handleChange={handleChange} handleTemperament={handleTemperament} handleTempReset={handleTempReset}
      handleSubmit={handleSubmit} dog={newDog} errorsForm={errorsForm} handleHome={handleHome} handleOut={handleOut}/>
      
    </div>
  )

}

export default Create;