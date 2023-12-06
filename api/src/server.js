const express = require('express');

const AuthController = require("./controllers/AuthController");
const admincontrole = require ('./controllers/admincontrollers'); 
const Autenticador=require("./middlewares/Autenticador");
const port = process.env.PORT || 3000
const app = express();

app.use (express.json());
app.use("/auth", AuthController)
app.use("/admin",Autenticador, admincontrole);

app.listen(port, () =>{
    console.log('servidor está rodando !');
});