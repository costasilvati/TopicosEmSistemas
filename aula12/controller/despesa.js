const { json } = require('body-parser')
const Despesa = require('../model/despesa')

module.exports = app => {
   app.get('/despesa', (req, res) => {
      // retorna os dados??
      Despesa.lista(res)
   })
   app.get('/despesa/:id',(req, res) => {
      let id = parseInt(req.params.id)
      Despesa.buscaPorId(id, res)
   })
   app.post('/despesa', (req, res) => {
      console.log(req.body)
      Despesa.adiciona(req.body)
      res.send('Você esta na rota despesa via POST')
   })
   //PUT??
   app.patch('/despesa/:id',(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Despesa.altera(id, valores, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "valor=20.0&descricao=Compras" http://localhost:3000/despesa