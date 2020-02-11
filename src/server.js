
const express= require('express')

const kodersRouter= require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const app = express()

app.use (express.json())

app.use('/koders',kodersRouter)
app.use('/mentors',mentorsRouter)

module.exports = app