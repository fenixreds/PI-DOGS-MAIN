const server=require("./src/app");
//const {conn}=require("./src/db");

const PORT=3001;

server.listen(PORT,()=>{
    //connect.sync({force:true});
    console.log(`listening on port ${PORT}`);
})