const express = require('express')
const app = express()
const data = require('./data')
const mongoose = require('./mongoose/mongoose')

//constans
const port = 5000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/api/',require('./routers/api.router'))
app.use('/link/',require('./routers/links.router'))
app.listen(port,(req, res) => console.log('server is start'))
module.exports=app;