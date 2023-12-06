const express = require('express');

const AuthController = require("/home/ubuntu/git/controllers/AuthController");
const admincontrole = require ('/home/ubuntu/git/controllers/admincontrollers'); 
const Autenticador=require("/home/ubuntu/git/middlewares/Autenticador");
const port = process.env.PORT || 3000
const app = express();

app.use (express.json());
app.use("/auth", AuthController)
app.use("/admin",Autenticador, admincontrole);

app.listen(port, () =>{
    console.log('servidor está rodando !');
});
