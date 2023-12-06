const mongoose = require("/home/ubuntu/git/database");

const bcryptjs= require("bcryptjs");
 
const UserSchema =new mongoose.Schema({
    
    nome: {
        type:String
    },
    email: {
        type:String,
        unique: true,
    },
    senha: {
        type:String,
        select :false,
    },telefones: [
        {
            numero: {
            type: String,   
            },
            ddd: {
            type: String, 
            },
        },
    ],
    createdAt:{
        type:Date,
        default: Date.now
    },
    dataAtualizacao:{
        type: Date,
        default: Date.now,
    },
    ultimoLogin: {
        type: Date,
        default: null,
    },
});

UserSchema.pre("save", async function(next) {
    const hash  = await bcryptjs.hash(this.senha, 10);
   
    this.senha = hash;
})

const User= mongoose.model("User",UserSchema);

module.exports=User;
