
module.exports = app => {
   app.get('/despesa', (req, res) => res.send(`Você acessou GET`))
   app.post('/despesa', (req, res) => {
      console.log(req.body)
      res.send('Você esta na rota despesa via POST')
   })
}