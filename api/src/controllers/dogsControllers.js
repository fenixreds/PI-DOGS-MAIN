const axios=require("axios");
const {Dog,Temperament}=require("../db");
const {Op}=require("sequelize");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const infoApiSelect=(array)=>{
    return array.map((dog)=>{
        return{
            id:dog.id,
            reference_image_id:"https://cdn2.thedogapi.com/images/"+dog.reference_image_id+".jpg",
            name:dog.name,
            height:dog.height.metric,
            weight:dog.weight.metric,
            life_span:dog.life_span,
            temperament:dog.temperament

        }
    })
};

const infoDBSelect=(array)=>{
    
    return array.map((dog)=>{
   
        return{
            id:dog.id,
            reference_image_id:dog.reference_image_id,
            name:dog.name,
            height:dog.height,
            weight:dog.weight,
            life_span:dog.life_span,
            temperament:tempsSelect(dog)

        }
    })
};

const convNumbers=(array)=>{
    return array.map((item)=>{
        return Number(item)
    })
};

const tempsSelect=(array)=>{
    return (array.Temperaments).map((objeto)=>{
        return objeto.name
    }).join(',')
};




const getDogByName=async(name)=>{

    const infoDB=await Dog.findAll({
        where:{
            name:{
                [Op.iLike]:`%${name}%`,
            }
        },
        include:{
            model:Temperament,
            through:{
                attributes:[],
            },
            

        }
        
    });
    console.log(infoDB);
    const dogDB=infoDBSelect(infoDB);
    

    const infoApi=(await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)).data;
    const dogApi=infoApiSelect(infoApi);

    return[...dogDB,...dogApi];

};

const getAllDogs=async()=>{

    const infoDB=await Dog.findAll({
        include:{
            model:Temperament,
            through:{
                attributes:[],
            },
            

        }
    });
    const dogDB=infoDBSelect(infoDB);

    const infoApi=(await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;
    const dogApi=infoApiSelect(infoApi);

    return[...dogDB,...dogApi];

};

const getDogById=async(id)=>{

    const dogDB=await Dog.findByPk(id,{
        include:{
            model:Temperament,
            through:{
                attributes:[],
            }            
        }
    });
    const infoApi=(await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;
    const dogFilterApi=infoApi.filter((dog)=>dog.id===Number(id));

    if(dogDB){
        const dogDBArray=[dogDB]; //se vuelve array para usar la function infoDBselect
        const dogDBSelect=infoDBSelect(dogDBArray);
        return dogDBSelect[0];
        
    }else if(dogFilterApi){
        const dogApi=infoApiSelect(dogFilterApi);
        return dogApi[0];
    }else{
        return false;
    }   

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
        
        const tempsArray=temperamentId.split(",");
        
        const tempsId=convNumbers(tempsArray);
        
        await newDog.addTemperament(tempsId);
        
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
