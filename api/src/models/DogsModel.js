const {DataTypes}=require("sequelize");

module.exports=(sequelize)=>{

    sequelize.define("Dog",{
        id:{
            type:DataTypes.STRING,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        },
        reference_image_id:{
            type:DataTypes.STRING,
            allowNull:false

        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        height:{
            type:DataTypes.STRING,
            allowNull:false
        },
        weight:{
            type:DataTypes.STRING,
            allowNull:false
        },
        life_span:{
            type:DataTypes.STRING,
            allowNull:false
        },
        created:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }

    },{timestamps:false});
};