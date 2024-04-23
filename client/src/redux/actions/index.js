import axios from "axios";

export const GET_DOGS="GET_DOGS"
export const GET_BY_NAME="GET_BY_NAME"
export const GET_DETAIL="GET_DETAIL"
export const GET_RENDER_DOGS="GET_RENDER_DOGS"

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

export function getRenderDogs(currentpage,recordsPerPage){
    return{
        type:"GET_RENDER_DOGS",
        payload:{
            valor1: currentpage,
            valor2: recordsPerPage
        },
    }
}