const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3310,
    database:"aulanode2"
})

module.exports = conexao
