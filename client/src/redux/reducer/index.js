import {GET_BY_NAME, GET_DOGS, GET_DETAIL, GET_RENDER_DOGS, CLEAN_DETAIL, GET_TEMPERAMENTS, FILTER_TEMPERAMENTS} from "../actions";

let initialState={allDogs:[],dogsCopy:[],dog:[],renderDogs:[],temperaments:[]};

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
        
        case CLEAN_DETAIL:
            return{
                ...state,
                dog:[]
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
            
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments:action.payload
            }

        case FILTER_TEMPERAMENTS:
            // let test=state.dogsCopy[1].temperament.split(",");
            // console.log(test[3]);
            // console.log('Vocal');
            // let test2=test.includes(' Vocal');
            // console.log(test2);

            
            return{
                ...state,
                allDogs:state.dogsCopy.filter(function(dog){
                    if(dog.temperament){
                        let tempsArray=dog.temperament.split(",");
                        return tempsArray.includes(action.payload);
                    }else{
                        return false;
                    }
                    
                })
            }    
                
        default:
            return state    
    }
};

export default rootReducer;