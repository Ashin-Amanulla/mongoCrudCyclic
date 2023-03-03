const mongoose = require('mongoose')
const Schema = mongoose.Schema


const studentDetail = new Schema(

    {
        name: { type: String },
        age: { type: Number },
        location: { type: String }
    }
)


const StudentData = mongoose.model('student',studentDetail)

module.exports=StudentData