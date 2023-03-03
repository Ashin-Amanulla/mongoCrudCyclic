const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://userone:W4ezkSg0Px@cluster0.vcc0q.mongodb.net/college') //connect our server with mongoDB
    .then(() => {
        console.log("My DB is connected successfully")
    })
    .catch(() => {
        console.log("ERROR!!!!!   Mongo DB is NOT CONNECTED!!!!")//error handling 
    })
