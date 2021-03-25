 const express = require("express");
 const app = express();


app.get("/", function(req, res){
    res.send("Gerenciador Financeiro");
});

app.get("/contato", function(req, res){
    res.send("Pagina de contato");
});

app.get("/sobre", function(req, res){
    res.send("sobre a empresa");
});

app.get("/blog", function(req, res){
    res.send("voce esta no blog");
});

//localhost:8080
 app.listen(8080);