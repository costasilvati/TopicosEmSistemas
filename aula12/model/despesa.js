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

    buscaPorId(id, res){
        let sql = 'SELECT * FROM despesa WHERE id=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    altera(id, valores, res){
        let sql = 'UPDATE despesa SET ? WHERE id = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    

/*
    altera(id, valores, res){
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE despesa SET ? WHERE id = ?'
        conexao.query(sql,[valores, id],(erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }*/

}
module.exports = new Despesa