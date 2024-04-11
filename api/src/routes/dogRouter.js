const {Router}=require("express");
const {getDogsHandler,getDetailHandler} = require("../handlers/dogsHandler");
const dogRouter=Router();


dogRouter.get("/",getDogsHandler);
dogRouter.get("/:id",getDetailHandler);
// dogRouter.post("/",createDogHandler);

module.exports=dogRouter;