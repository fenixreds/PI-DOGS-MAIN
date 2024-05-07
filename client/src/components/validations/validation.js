const validate=(newDog)=>{
    let errorsForm={};

    if(!/^(?!\s+$)[a-zA-Z\s]+$/.test(newDog.name)){
        errorsForm.name="Nombre invalido"
    }
    if(!/^[1-9]\d*$/.test(newDog.minHeight)){
        errorsForm.minHeight="Altura minima invalida"
    }
    if(!/^[1-9]\d*$/.test(newDog.maxHeight)){
        errorsForm.maxHeight="Altura maxima invalida"
    }
    if(!/^[1-9]\d*$/.test(newDog.minWeight)){
        errorsForm.minWeight="Peso minimo invalido"
    }
    if(!/^[1-9]\d*$/.test(newDog.maxWeight)){
        errorsForm.maxWeight="Peso maximo invalido"
    }
    if(!/^[1-9]\d*$/.test(newDog.life_span)){
        errorsForm.life_span="Años de vida invalido"
    }
    if(!(Number(newDog.minHeight)<Number(newDog.maxHeight))){
        errorsForm.minHeight="Altura minima debe ser menor que la mayor"
    }
    if(!(Number(newDog.maxHeight)>Number(newDog.minHeight))){
        errorsForm.maxHeight="Altura maxima debe ser mayor que la menor"
    }
    if(!(Number(newDog.minWeight)<Number(newDog.maxWeight))){
        errorsForm.minWeight="Peso minimo debe ser menor que el mayor"
    }
    if(!(Number(newDog.maxWeight)>Number(newDog.minWeight))){
        errorsForm.maxWeight="Peso maximo debe ser mayor que el menor"
    }
    if(!newDog.temperament){
        errorsForm.temperament="Debe seleccionar al menos un temperamento"
    }
    

    return errorsForm;
}

export default validate;