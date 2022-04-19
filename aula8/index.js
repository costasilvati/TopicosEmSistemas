// npm install express   
// npm --save-dev install nodemon
// npm install consign
// npm install body-parser
// npm install mysql
// Comando para iniciar a aplicação: npm start
const customExpress = require('./config/customExpress')
const conexao = require('./infra/connection')
const tabela = require('./infra/tabelas')
const app = customExpress()

conexao.connect(erro => {
    if(erro){
        console.log("Erro na conexão!" + erro)
    }else{
        app.listen(3000, () => console.log('Servidor ativo na porta 3000'))
    }
})


