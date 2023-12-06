const jwt =require("jsonwebtoken");
const authConfig= require("../config/auth.json")
module.exports=(req,res ,next )=>{
    
    const authHeader = req.headers.authorization;
    
    if(!authHeader){
        return res.status(401).json({
            error:true,
            message:"Token não foi fornecido" 
        })

    }
    const parts= authHeader.split(" ");
    if (parts.length!= 2) {
        return res.status(401).json({
            error:true,
            message:"Token do tipo invalido" 
        })

    }
    const [scheme,token]= parts;
    if(scheme.indexOf("Bearer") !== 0){
        return res.status(401).json({
            error:true,
            message:"Token mal formatado" 
        })
    }
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                error:true,
                mensagem: 'Sessão inválida' 
            })
          }
          return res.status(403).json({
            error:true,
            mensagem: 'Não autorizado' 
            })
        }
        req.userLogged= decoded;
        console.log(err);
        console.log(decoded);
    return  next();
    })
   
    
} 