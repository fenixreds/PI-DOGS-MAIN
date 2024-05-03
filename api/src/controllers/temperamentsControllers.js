const axios=require("axios");
const{Temperament}=require("../db");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const arrayObj=(array)=>{
    return array.map((dog)=>{
        return{
            name:dog
        }
    })
};

const getAllTemperaments=async()=>{

    const infoDB=await Temperament.findAll();
    
    if(infoDB.length){
        return [...infoDB]
    }else{
        const infoApi=(await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;

        const temperaments=[];
        infoApi.forEach(dog => {
            if(dog.temperament){
                const dogTemperaments=dog.temperament.split(",").map(temp=>temp.trim());
                temperaments.push(...dogTemperaments);
            }
            
        });

        const uniqueTemperaments=[...new Set(temperaments)];
        const sortTemperament=uniqueTemperaments.sort();

        arrayObjTemperaments=arrayObj(sortTemperament);

        const temperamentsApi=await Temperament.bulkCreate(arrayObjTemperaments);

        return [...temperamentsApi];
    }

    
}

module.exports=getAllTemperaments;