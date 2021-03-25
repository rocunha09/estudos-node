const express = require("express");
const app = express();
app.use(express.static("public"))
const mysql = require('mysql');

//conexao db MySQL
const connection = mysql.createConnection({
   host     : 'localhost',
   port     :  '3306',
   user     : 'big',
   password : '123456',
   database : 'celke'
});

connection.connect(function(err) {
   if (err) {
      console.error('Erro ao realizar Conexão com BD>: ' + err.stack);
      return;
   }

console.log('connected as id ' + connection.threadId);
});


/*
connection.query("DELETE FROM users WHERE id = 2", function(err, result){
   if (!err) {
      console.log('usuario excluido com sucesso');
   } else {
      console.log('Erro ao realizar exclusao');
   }
})*/

/*
connection.query("UPDATE users SET email = 'João@celke.com.br' WHERE id = 1", function(err, result){
   if (!err) {
      console.log('usuario editado com sucesso');
   } else {
      console.log('Erro ao realizar alteracao');
   }
})*/

/*
connection.query("INSERT INTO users(nome, email) VALUES ('Rafael', 'Rafael@celke.com.br')", function(err, result){
   if (!err) {
      console.log('Usuario cadastrado com sucesso');
   } else {
      console.log('Erro ao cadastrar usuario');
   }
});
 */
connection.query('SELECT * FROM users', function(err, rows, fields){
   if (!err) {
      console.log('Resultado:\n', rows);
   } else {
      console.log('Erro ao realizar consulta');
   }
})

app.get("/", function(req, res){
   //dir name pega o caminho relativo do diretório simplificando o uso na importação
   res.sendFile(__dirname + "/src/index.html");
});

app.get("/contato", function(req, res){
   res.sendFile(__dirname + "/src/contato.html");
});

app.get("/sobre-empresa", function(req, res){
   res.sendFile(__dirname + "/src/sobre-empresa.html");
});

app.get("/blog", function(req, res){
   res.send("voce esta no blog");
});

//localhost:8080
app.listen(8081);