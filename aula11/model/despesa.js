const res = require('express')
const moment = require('moment')
const conexao = require('../infra/connection')
class Despesa{
    adiciona(despesa){
        let sql = 'INSERT INTO despesa SET ?'
        conexao.query(sql,despesa,(erro, resultado)=> {
            if(erro){console.log(erro)
            }else{console.log(resultado)}})
    }
    lista(res){
        const sql = 'SELECT * FROM despesa'
        conexao.query(sql, (erro, resultado) => {
            if(erro){res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)}})
    }
}
module.exports = new Despesa