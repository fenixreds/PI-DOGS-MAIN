const validate=(newDog)=>{
    let errorsForm={};

    if(!/^(?!\s+$)[a-zA-Z\s]+$/.test(newDog.name)){
        errorsForm.name="Nombre invalido"
    }

    if(!newDog.minHeight){
        errorsForm.minHeight="Altura minima es obligatoria"
    }
    if(!newDog.maxHeight){
        errorsForm.maxHeight="Altura maxima es obligatoria"
    }
    if(!newDog.minWeight){
        errorsForm.minWeight="Peso minimo es obligatorio"
    }
    if(!newDog.maxWeight){
        errorsForm.maxWeight="Peso maximo es obligatorio"
    }
    if(!newDog.life_span){
        errorsForm.life_span="Años de vida es obligatorio"
    }
    if(!newDog.temperament){
        errorsForm.temperament="Debe seleccionar al menos un temperamento"
    }
    

    return errorsForm;
}

export default validate;