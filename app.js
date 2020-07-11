const express = require('express')
const  app = express()
const port = process.env.PORT || 3000;
const fs = require('fs')
const FILEPATH='publick/index.html';
const engi1 = require('./engine/engine')
const data = require*


app.enable('trust proxy')
app.use(express.static('publick'));
app.engine('eeng',engi1)
app.set('views', './view') // specify the views directory
app.set('view engine', 'eeng') // register the template engine

app.get('/',(req,res)=>{
    res.render('index',{
        text:"title",
        value:"Zagolovok"
    })
})


app.listen(
    port, (req, res) => {   
        console.log('server is start')
    })

module.exports=app;