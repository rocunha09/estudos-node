const Sequelize = require('sequelize');


const sequelize = new Sequelize('celke', 'big', '123456', {
   host: 'localhost', 
   dialect: 'mysql'
});

sequelize.authenticate().then(function(){
   console.log('Conexao realizada com sucesso.');
}).catch(function(err){
   console.log('Falha ao tentar se conectar ao BD: ' + err);   
});

//criação de tabela
/*
const User = sequelize.define('pagamentos', {
   nome:{
      type: Sequelize.STRING,
      allowNull: false
   }, 
   valor: {
      type: Sequelize.DOUBLE
   }
});

User.sync({force: true});
*/

//inserir dados na tabela pagamentos
/*
const Pagamento = sequelize.define('pagamentos', {
   nome:{
      type: Sequelize.STRING,
   }, 
   valor: {
      type: Sequelize.DOUBLE
   }
});

Pagamento.create({
   nome: "Energia", 
   valor: 35.86
});
*/