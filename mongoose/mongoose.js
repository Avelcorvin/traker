const mongoose = require('mongoose')
const uriDB = "mongodb+srv://avel:1234512345@cluster0-xz0iu.azure.mongodb.net/tracker?retryWrites=true&w=majority"

mongoose.set('useCreateIndex', true);
mongoose.connect(uriDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.connection.once('true',()=>{console.log('Соединеине установлено')})
mongoose.connection.on('error',()=>{console.log('error')})



module.exports = mongoose;