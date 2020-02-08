
const mongoose = require ('mongoose')

const db_password = 'Butthead260789'
const db_name = 'kodemia'
const url = `mongodb+srv://adan:${db_password}@sexta-gen-an16o.mongodb.net/${db_name}?retryWrites=true&w=majority`



module.exports =  mongoose.connect(url,{useNewUrlParser:true})