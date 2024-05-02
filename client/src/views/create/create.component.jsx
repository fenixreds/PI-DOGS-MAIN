import { useState,useEffect } from "react";
import {useHistory} from 'react-router-dom';
import Form from "../../components/form/form.component";
import { useDispatch, useSelector } from "react-redux";
import { cleanCreateDog, cleanError, createDog } from "../../redux/actions";
import validate from "../../components/validations/validation";


function Create() {

  const dispatch=useDispatch();
  const history=useHistory();

  const createdNewDog=useSelector((state)=>state.createdNewDog);
  const error=useSelector((state)=>state.error)

  const [newDog,setDog]=useState({
    name:"",
    image:"",
    minHeight:"",
    maxHeight:"",
    minWeight:"",
    maxWeight:"",
    life_span:"",
    temperament:"",

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
    //console.log(newDog);
  }

  function handleSubmit(e){
    e.preventDefault();
    const newSelectDog={
      reference_image_id:newDog.image,
      name:newDog.name,
      height:newDog.minHeight+" - "+newDog.maxHeight,
      weight:newDog.minWeight+" - "+newDog.maxWeight,
      life_span:newDog.life_span+" years",
      temperamentId:newDog.temperament
    }
    console.log(newSelectDog);
    dispatch(createDog(newSelectDog));

    
  }


  useEffect(()=>{
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
      console.log(error.response);
      window.alert("La raza ya existe o faltan datos");  
    }  
  },[dispatch,createdNewDog,error,history]);
  

  return(
    <div>
      <h1>Ingrese informacion de la nueva raza</h1>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} dog={newDog} errorsForm={errorsForm}/>
    </div>
  )

}

export default Create;