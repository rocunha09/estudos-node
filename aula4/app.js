const express = require("express");
const app = express();


app.get("/", function(req, res){
   //dir name pega o caminho relativo do diretório simplificando o uso na importação
   res.sendFile(__dirname + "/src/index.html");
});

app.get("/contato", function(req, res){
   res.send("Pagina de contato");
});

app.get("/sobre-empresa", function(req, res){
   res.sendFile(__dirname + "/src/sobre-empresa.html");
});

app.get("/blog", function(req, res){
   res.send("voce esta no blog");
});

//localhost:8080
app.listen(8080);