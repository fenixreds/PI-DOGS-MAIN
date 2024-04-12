const{Sequelize}=require("sequelize");
const DogsModel=require("./models/DogsModel");
const TemperamentsModel=require("./models/TemperamentsModel");
const dog_temperamentModel=require("./models/dog_temperamentModel");
require("dotenv").config()

const{DB_USER,DB_PASSWORD,DB_HOST,DB_NAME}=process.env;

const sequelize=new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{logging:false});

//DEFINICION DE MODELOS A USAR
DogsModel(sequelize);
TemperamentsModel(sequelize);
dog_temperamentModel(sequelize);

//CREANDO RELACIONES ASOCIACIONES
const{Dog,Temperament,dog_temperament}=sequelize.models;

Dog.belongsToMany(Temperament,
{through:dog_temperament});
Temperament.belongsToMany(Dog,
{through:dog_temperament});

module.exports={
    ...sequelize.models,
    conn:sequelize
}