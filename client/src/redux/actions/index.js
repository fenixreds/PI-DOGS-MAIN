import axios from "axios";

export const GET_DOGS="GET_DOGS"
export const GET_BY_NAME="GET_BY_NAME"
export const GET_DETAIL="GET_DETAIL"
export const CLEAN_DETAIL="CLEAN_DETAIL"
export const GET_RENDER_DOGS="GET_RENDER_DOGS"
export const GET_TEMPERAMENTS="GET_TEMPERAMENTS"
export const FILTER_TEMPERAMENTS="FILTER_TEMPERAMENTS"
export const FILTER_ORIGIN="FILTER_ORIGIN"
export const FILTER_ORIGIN_TEMPERAMENT="FILTER_ORIGIN_TEMPERAMENT"
export const SORT_NAME="SORT_NAME"
export const SORT_WEIGHT="SORT_WEIGHT"
export const CREATE_DOG="CREATE_DOG"
export const CLEAN_CREATE_DOG="CLEAN_CREATE_DOG"
export const HANDLE_ERROR="HANDLE_ERROR"
export const CLEAN_ERROR="CLEAN_ERROR"

export function getDogs(){
    return async function(dispatch){
        const response=await axios("http://localhost:3001/dogs/");
        return dispatch({
            type:"GET_DOGS",
            payload:response.data
        })
    }
    
    
}

export function getByName(name){
    return async function(dispatch){
        const response=await axios(`http://localhost:3001/dogs/?name=${name}`);
        return dispatch({
            type:"GET_BY_NAME",
            payload:response.data
        })
    }
}


export function getDetail(id){
    return async function(dispatch){
        const response=await axios(`http://localhost:3001/dogs/${id}`);
        return dispatch({
            type:"GET_DETAIL",
            payload:response.data
        })
    }
}

export function cleanDetail(){
    return {
        type:"CLEAN_DETAIL",
        payload:{}
    }
}

export function getRenderDogs(currentpage,recordsPerPage){
    return{
        type:"GET_RENDER_DOGS",
        payload:{
            valor1: currentpage,
            valor2: recordsPerPage
        },
    }
}

export function getTemperaments(){
    return async function(dispatch){
        const response=await axios("http://localhost:3001/temperaments");
        return dispatch({
            type:"GET_TEMPERAMENTS",
            payload:response.data
        })
    }   
}

export function filterTemperaments(temperament){
    return{
        type:"FILTER_TEMPERAMENTS",
        payload:temperament
    }
}

export function filterOrigin(created){
    return{
        type:"FILTER_ORIGIN",
        payload:created
    }
}

export function filterOriginTemperament(created,temperament){
    return{
        type:"FILTER_ORIGIN_TEMPERAMENT",
        created,
        temperament
    }
}

export function sortName(order){
    return{
        type:"SORT_NAME",
        payload:order
    }
}

export function sortWeight(order){
    return{
        type:"SORT_WEIGHT",
        payload:order
    }
}

export function createDog(newDog){
    return async function(dispatch){
        try {
            const URL="http://localhost:3001/dogs"
            let response=await axios.post(URL,newDog);
            return dispatch({
                type:"CREATE_DOG",
                payload:response
            })
            
        } catch (error) {
            return dispatch({
                type:"HANDLE_ERROR",
                payload:error
            })
        }
        
    }   
}

export function cleanCreateDog(){
    return {
        type:"CLEAN_CREATE_DOG",
        payload:{}
    }
}

export function cleanError(){
    return {
        type:"CLEAN_ERROR",
        payload:{}
    }
}