// npm install consign
module.exports = app => {
   app.get('/despesa', (req, res) => res.send('Você esta em /despesas via GET'))
   app.post('/despesa', (req, res) => res.send('Você esta em despesa via POST'))
}