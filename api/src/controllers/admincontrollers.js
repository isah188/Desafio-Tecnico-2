const express=require("express");
const router = express.Router();
const autenticacao = require("../middlewares/Autenticador");
const user = require("../models/User");

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