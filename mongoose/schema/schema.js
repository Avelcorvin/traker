const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model
const schema = new Schema({
    "campaing-name":{type:String,unique:true,required:true},
    "campaing-link": {type:String,unique:true,required:true},
    "campaing-end-link": {type:String,unique:false,required:true},
})

module.exports= model('Campaings',schema)

