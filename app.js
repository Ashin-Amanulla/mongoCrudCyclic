const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')

app.use(logger('dev')) // logging details
app.use(cors()) //cor policy
app.use(express.json()) //parse json data
app.use(express.urlencoded({ extended: true })) //parsing

const studentRoute = require('./router/studentRouter.js')


require('./db/mongoDB') // mongodb initialization

app.use('/student',studentRoute) //middleware











// server running code 

app.listen(3244, () => {
    console.log("Server is running at 3244")
})
