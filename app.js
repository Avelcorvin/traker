const express =  require('express')
const app = express()
const port = process.env.PORT|| 3000


app.set('trust proxy','127.0.0.0/8')   
 

app.get('/',(req,res)=>{

    console.log(req.headers)
    console.log(req.ips)
    console.log(req.connection.remoteAddress)
    res.json(req.ip)
})



app.listen(
    port,(req,res)=>{
    console.log('server is start')
})
