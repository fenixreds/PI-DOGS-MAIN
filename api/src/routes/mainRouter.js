const {Router}=require("express");
const dogRouter=require("./dogRouter");
const temperamentRouter=require("./temperamentRouter");

const mainRouter=Router();

mainRouter.use("/dogs",dogRouter);

mainRouter.use("/temperaments",temperamentRouter);

module.exports=mainRouter;