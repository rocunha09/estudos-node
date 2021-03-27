const express = require('express');
const mongoose = require('mongoose');
require("./models/Artigo");
const Artigo = mongoose.model('artigo');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/celke', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Conexao com MongoDB realizada com sucesso");
}).catch((erro) => {
    console.log("falha ao se conextar ao banco de dados: " + erro);
});

app.get("/", function(req, res){
    return res.json({titulo: "Como criar API..."});
});

app.post("/artigo", function(req, res){
    //return res.json(req.body);

    const artigo = Artigo.create(req.body, (erro)=> {
        if(erro){
            return res.status(400).json({
                error: true,
                message: "Error: Artigo não foi cadastrado com sucesso!" + erro
            });  
        }

        return res.status(200).json({
            error: false,
            message: "cadastrado com sucesso!"
        });
    });
});


app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
