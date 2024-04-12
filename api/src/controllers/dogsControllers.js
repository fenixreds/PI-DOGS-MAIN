const axios=require("axios");
const {Dog}=require("../db");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const infoSelect=(array)=>{
    return array.map((dog)=>{
        return{
            id:dog.id,
            reference_image_id:dog.reference_image_id,
            name:dog.name,
            height:dog.height.metric,
            weight:dog.weight.metric,
            life_span:dog.life_span,
            temperament:dog.temperament

        }
    })
}

const getDogByName=async(name)=>{

    const infoApi=(await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)).data;
    const dogApi=infoSelect(infoApi);

    return[...dogApi];

};

const getAllDogs=async()=>{

    const infoApi=(await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;
    const dogApi=infoSelect(infoApi);

    return[...dogApi];

};

const getDogById=async(id)=>{

    const infoApi=(await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;
    const dogFiltered=infoApi.filter((dog)=>dog.id===Number(id));
    const dogApi=infoSelect(dogFiltered);
       
    return[...dogApi];

};

const createDogDB=async({reference_image_id,name,height,weight,life_span,temperamentId})=>{

    const [newDog,created]=await Dog.findOrCreate({
        where:{name:name},
        defaults:{
            reference_image_id:reference_image_id,
            height:height,
            weight:weight,
            life_span:life_span,
            
        }
    });

    if(created){
        await newDog.addTemperament([1,2]);
        
        return newDog;
    }else{
        return false;
    }
};

module.exports={
    getDogByName,
    getAllDogs,
    getDogById,
    createDogDB
}
