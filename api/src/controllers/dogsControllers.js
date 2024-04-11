const axios=require("axios");
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

module.exports={
    getDogByName,
    getAllDogs,
    getDogById
}
