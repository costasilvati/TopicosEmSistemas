const express = require('express') 

const app = express()

app.listen(3000, () => console.log('Servidor na porta 3000'))

app.get('/despesa', (req, res) => res.send('Você esta POBRES!'))