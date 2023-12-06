const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://isadorasousa188:desafio123456789@desafiotecnico2.lwfieg0.mongodb.net/api")

.then(() => {
    console.log('Conectado ao MongoDB com sucesso');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

mongoose.Promise= global.Promise;

module.exports=mongoose;

