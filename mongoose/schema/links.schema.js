const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model
const schema = new Schema({
    "campaing-name":{type:String,unique:false,required:true},
    "campaing-link": {type:String,unique:false,required:true},
    "campaing-end-link": {type:String,unique:false,required:true},
    date:{type:Date,unique:false,required:false},
    ip:{type:String,unique:false,required:false},
    device:{type:String,unique:false,required:true},
    useragent:{type:String,unique:false,required:true},
})

module.exports= model('Links',schema)

