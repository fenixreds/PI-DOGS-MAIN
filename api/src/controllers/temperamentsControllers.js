const axios=require("axios");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const getAllTemperaments=async()=>{

    const infoApi=(await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;

    const temperaments=[];
    infoApi.forEach(dog => {
        if(dog.temperament){
            const dogTemperaments=dog.temperament.split(",");
            temperaments.push(...dogTemperaments);
        }
        
    });

    const uniqueTemperaments=[...new Set(temperaments)];
    const temperamentsApi=uniqueTemperaments.sort();

    return[...temperamentsApi];
}

module.exports=getAllTemperaments;