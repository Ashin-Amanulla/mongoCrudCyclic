
const express = require('express')

const router = express.Router()
const StudentData = require('../model/student')



// adding data 
router.post('/', async (req, res) => {

    try {

        let item = req.body;
        console.log(item)
        const user = new StudentData(item) //validating
        const savedUser = await user.save() //adding 
        res.status(200).json('Entered successfully')

    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
})



//reading all data 
router.get('/', async (req, res) => {

    try {
        const list = await StudentData.find()
        res.status(200).json(list)
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
})


//reading a specific data

router.get('/:id', async (req, res) => {

    try {

        let id = req.params.id
        const list = await StudentData.findOne({ _id: id })
        res.status(200).json(list)
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
})


//updating Data

router.put('/:id', async (req, res) => {

    try {
        let item = req.body
        let id = req.params.id

        let updatedData = { $set: item }

        let updatedStudent = await StudentData.findByIdAndUpdate({ _id: id }, updatedData , {new:true})

        res.status(200).json(updatedStudent)


    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }

})


//delete Data


router.delete('/:id', async (req, res) => {

    try {

        let id = req.params.id
        const list = await StudentData.findByIdAndDelete(id)
        res.status(200).json('Deleted Successfully')
        
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
})




module.exports = router;