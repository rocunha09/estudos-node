const Sequelize = require('sequelize');


const sequelize = new Sequelize('celke', 'big', '123456', {
   host: 'localhost', 
   dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize, // recebe o require
    sequelize: sequelize  // recebe a conexao
}
