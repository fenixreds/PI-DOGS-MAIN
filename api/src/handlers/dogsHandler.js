const { getDogByName, getAllDogs, getDogById, createDogDB } = require("../controllers/dogsControllers");

const getDogsHandler=async(req,res)=>{

    const {name}=req.query;

    try {
        if(name){
            const dogByName=await getDogByName(name);
            dogByName.length
            ?res.status(200).json(dogByName)
            :res.status(400).json("No existe esta raza");
        }else{
            const response=await getAllDogs();
            response.length
            ?res.status(200).json(response)
            :res.status(400).json("Hubo un error al obtener las razas");
        }
        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const getDetailHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const response=await getDogById(id);
        response
        ?res.status(200).json(response)
        :res.status(400).json("No existe una raza con el id indicado");
        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const createDogHandler=async(req,res)=>{

    const{reference_image_id,name,height,weight,life_span,temperamentId}=req.body;

    try {
        const response=await createDogDB({reference_image_id,name,height,weight,life_span,temperamentId});
        if(response===false){
            res.status(400).json("Ya creo este perro en la base de datos");
        }else{
            res.status(200).json(response);
        }
        
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}

module.exports={
    getDogsHandler,
    getDetailHandler,
    createDogHandler
};