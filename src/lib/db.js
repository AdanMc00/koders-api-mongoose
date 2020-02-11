const mongoose = require ('mongoose')

const {
  DB_PASSWORD,
  DB_USER,
  DB_NAME,
  DB_HOST
} = process.env



const db_password = 'Butthead260789'
const db_name = 'kodemia'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`



module.exports =  mongoose.connect(url,{useNewUrlParser:true})