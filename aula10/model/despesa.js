const res = require('express')
const conexao = require('../infra/connection')
class Despesa{
    adiciona(despesa){
        let sql = 'INSERT INTO despesa SET ?'
        conexao.query(sql,despesa)
    }
}
module.exports = new Despesa