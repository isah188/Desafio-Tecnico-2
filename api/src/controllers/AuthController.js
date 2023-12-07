const express = require("express");
const bcryptjs =require ("bcryptjs");
const jwt =require("jsonwebtoken");
const authConfig = require("/home/ubuntu/git/config/auth.json");


const UserModel = require("/home/ubuntu/git/models/User");

const  router = express.Router();

const geradordetoken=(user={})=>{
    return jwt.sign({
        id: user.id,
        nome:user.nome
    }, authConfig.secret  ,{
        expiresIn: 1800
    });
}
router.post("/register",async(req,res)=> {


    const{email}=req.body;

    if (await UserModel.findOne({email})) 

    {
        return res.status(400).json 
        ({
            error:true,
            message:"E-mail já existente"
        })
    }
    const user=await UserModel.create(req.body);
   
   
   
    
    
        return res.json({
            error:false,
            message:"Usuario cadastrado com sucessso!",
           
            user,
            token:geradordetoken(user)
        })
        
})

 router.post("/autenticacao",async (req,res)=>{

    const {email, senha}=req.body;

    const user = await UserModel.findOne({email}).select("+senha");

    
    if(!user){
        return res.status(400).json({
            error:true,
            message:"Usuário e/ou senha inválidos"
        })
    }
    if (!await bcryptjs.compare(senha,user.senha)){
        return res.status(401).json({
            error:true,
            message:"Usuário e/ou senha inválidos"
        })
    }
    user.senha =undefined;
    
    

    return res.json({
        user,
        token:geradordetoken(user)
    });
 })

module.exports = router;
