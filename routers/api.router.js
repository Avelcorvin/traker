const router = require('express').Router()
const Schema = require('../mongoose/schema/schema')

router.post('/getdata', async (req, res) => {
    try {
        const request =req.body
        const createCompain  = new Schema(request)
        await createCompain.save()
        res.json({message:"Данные получены"})
        
    } catch (error) {
        console.log("error: /getdata ")
    }
   
})

router.get('/getdata', (req, res) => {
    const request =req.body
    const createCompain  = new Schema.findOne(request)

    res.json({message:"Данные получены",data:createCompain})
})

router.put('/getdata', (req, res) => {
    res.json(data)
})
router.delete('/getdata', (req, res) => {
    res.json(data)
})

module.exports = router;