const express =  require('express')
const app = express()
const port = process.env.PORT|| 3000


app.enable('trust proxy')
app.use(express.static('publick'));


app.post('/',(req,res)=>{
    const headers = req.headers
    let data='<div>'
    for (met in headers){
        data+=`${met}:${headers[met]} <br\>`
    }
    res.send(data)
})
app.listen(
    port,(req,res)=>{
    console.log('server is start')
})
