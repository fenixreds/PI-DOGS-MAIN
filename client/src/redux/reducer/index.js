import {GET_BY_NAME, GET_DOGS, GET_DETAIL, GET_RENDER_DOGS} from "../actions";

let initialState={allDogs:[],dogsCopy:[],dog:[],renderDogs:[]};

function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                allDogs:action.payload,
                dogsCopy:action.payload
            }

        case GET_BY_NAME:
            return{
                ...state,
                allDogs:action.payload
            } 
            
        case GET_DETAIL:
            return{
                ...state,
                dog:action.payload

            } 
            
        case GET_RENDER_DOGS:
            const{valor1,valor2}=action.payload;
            
            const lastIndex=valor1 * valor2;
            const firstIndex=lastIndex-valor2;
            const records=state.allDogs.slice(firstIndex,lastIndex);
            
            return{
                ...state,
                renderDogs:records
            }    
        default:
            return state    
    }
};

export default rootReducer;