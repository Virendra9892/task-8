const db = require("../models/index")
const user = db.user;

exports.createUser = async(req,res,next)=>{
    try{
    let body = req.body;
    let exist = await user.findOne({where:{email:body.email}})
    if(exist){
       throw new Error("user data already exist..")
    }
    let result = await user.create({
        userName:body.userName,
        email:body.email
    })
    if(result){
        return res.send({sucess:true,message:"user created sucessfully",result:result})
    }
    }
    catch(err){
       next(err)
    }
}