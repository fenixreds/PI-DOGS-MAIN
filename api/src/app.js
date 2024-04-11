const express=require("express");
const morgan=require("morgan");
const mainRouter=require("./routes/mainRouter");
const cors=require("cors");
const app=express();

//Middlewares//

app.use(cors());//politicas de seguridad cors

app.use(morgan("dev"));//para ver mensajes de los req y status en la consola

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

app.use(express.json());//para que el server pueda leer json

app.use(mainRouter);//aqui inicia el router principal

module.exports=app;