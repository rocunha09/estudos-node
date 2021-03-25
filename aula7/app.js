const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const moment = require('moment');
const Pagamento = require('./models/pagamento');

app.engine('handlebars', handlebars({
    defaultlayout: 'main',
    helpers: {
        formatDate: (date)=>{
            return moment(date).format('DD/MM/YYYY')
        }
    }
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/pagamento", function(req, res){
    Pagamento.findAll({order: [['id', 'DESC']]}).then(function(pagamentos){
        res.render('pagamento', {pagamentos: pagamentos});
    })
});

app.get("/cad-pagamento", function(req, res){
    res.render("cad-pagamento");
});

app.post("/add-pagamento", function(req, res){
    //teste de recebimento de dados
    //res.send("Nome: "+ req.body.nome + "<br>Valor: "+ req.body.valor);
    
    Pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        //res.send("Pagamento cadastrado com sucesso");
        res.redirect("/pagamento");
    }).catch(function(erro){
        res.send("Erro ao cadastrar" + erro);
    });
    
});

app.get("/del-pagamento/:id", function(req, res){
    Pagamento.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        //res.send("Pagamento <b>apagado</b> com sucesso");
        res.redirect("/pagamento");
    }).catch(function(erro){
        res.send("falha ao tentar apagar registro de pagamento: "+ erro);
    });
});


app.listen(8080);