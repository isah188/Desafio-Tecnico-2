const express=require("express");
const router = express.Router();
const autenticacao = require("/home/ubuntu/git/middlewares/Autenticador");
const user = require("/home/ubuntu/git/models/User");

router.get('/user', autenticacao, (req, res) => {

    const usuario = req.user;


    res.json({
      mensagem: 'Usuário autenticado com sucesso',
      usuario: {
        id: usuario.id,
        email: usuario.email,
       
      }
    });
});

module.exports=router;
