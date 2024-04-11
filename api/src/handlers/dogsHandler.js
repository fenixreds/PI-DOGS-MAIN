const { getDogByName, getAllDogs, getDogById } = require("../controllers/dogsControllers");

const getDogsHandler=async(req,res)=>{

    const {name}=req.query;

    try {
        if(name){
            const dogByName=await getDogByName(name);
            res.status(200).json(dogByName);
        }else{
            const response=await getAllDogs();
            res.status(200).json(response);
        }
        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const getDetailHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const response=await getDogById(id);
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports={
    getDogsHandler,
    getDetailHandler
};