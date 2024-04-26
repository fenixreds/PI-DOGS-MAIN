import {GET_BY_NAME, GET_DOGS, GET_DETAIL, GET_RENDER_DOGS, CLEAN_DETAIL, GET_TEMPERAMENTS, FILTER_TEMPERAMENTS, FILTER_ORIGIN, FILTER_ORIGIN_TEMPERAMENT, SORT_NAME, SORT_WEIGHT} from "../actions";

let initialState={allDogs:[],dogsCopy:[],dog:[],renderDogs:[],temperaments:[],filteredDogs:[]};

function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                allDogs:action.payload,
                dogsCopy:action.payload,
                filteredDogs:action.payload
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
            
        case FILTER_ORIGIN:
            
            return{
                ...state,
                allDogs:state.dogsCopy.filter(function(dog){
                    if(String(dog.created)===action.payload){
                        return dog;
                    }else{
                        return false;
                    }
            }) 

            }

        case FILTER_ORIGIN_TEMPERAMENT:

            function fTemperament(dog){
                if(action.temperament==="all"){
                    return true;
                }
                if(dog.temperament){
                    let tempsArray=dog.temperament.split(",");
                    return tempsArray.includes(action.temperament);
                    
                }else{
                    return false;
                }
            }

            function fOrigin(dog){
                if(action.created==="all"){
                    return true;
                }
                if(String(dog.created)===action.created){
                    return true;
                }else{
                    return false;
                }
            }

            const filteredOriTemp=state.dogsCopy.filter(dog=>{
                return fTemperament(dog) && fOrigin(dog)
                
            })

            return{
                ...state,
                allDogs:filteredOriTemp,
                filteredDogs:filteredOriTemp

            }    
             

        case SORT_NAME:
            let sortedName;
            
            switch(action.payload){
                case "Ninguno":
                    console.log("case","ningu");
                    sortedName=state.filteredDogs;
                    break;
                case "Ascendente":
                    console.log("case","ascen");
                    sortedName=state.filteredDogs.sort((a,b)=>{
                        const nameA=String(a.name).toLowerCase();
                        const nameB=String(b.name).toLowerCase();

                        if(nameA<nameB){return -1}
                        if(nameA>nameB){return 1}
                        return 0;
                    });
                    break;
                case "Descendente":
                    console.log("case","desc");
                    sortedName=state.filteredDogs.sort((a,b)=>{
                        const nameA=String(a.name).toLowerCase();
                        const nameB=String(b.name).toLowerCase();
                        console.log(nameA,nameB);

                        if(nameA<nameB){console.log(1); return 1}
                        if(nameA>nameB){console.log(-1); return -1}
                        return 0;
                    });
                    break;
                default:
                    sortedName=state.filteredDogs;        
            }
            console.log(sortedName);
            return{
                ...state,
                allDogs:sortedName,
            }

        case SORT_WEIGHT:
            let sortedWeight;
            switch(action.payload){
                case "Ninguno":
                    sortedWeight=state.filteredDogs;
                    break;
                case "Ascendente":
                    sortedWeight=state.filteredDogs.sort((a,b)=>a.weight>b.weight ? 1:-1);
                    break;
                case "Descendente":
                    sortedWeight=state.filteredDogs.sort((a,b)=>a.weight<b.weight ? 1:-1);
                    break;
                default:
                    sortedWeight=state.filteredDogs;        
            }

            return{
                ...state,
                allDogs:sortedWeight
            }   
            
            
        default:
            return state    
    }
};

export default rootReducer;