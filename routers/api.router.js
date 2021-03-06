const router = require('express').Router()
const Schema = require('../mongoose/schema/schema')

router.post('/getdata', async (req, res) => {
    try {
        const request = req.body;
        const createCompain = new Schema(request)
        await createCompain.save()
        res.json({ message: "Данные получены" })
    } catch (error) {
        console.log("error: /getdata ")
    }
})

router.get('/getdata', async (req, res) => {
    try {
        const createCompain = await Schema.find({})
        const list = createCompain.map(element=>element["campaing-name"])
        res.json({
             message: "Данные получены",
             data: list
            })
    } catch (error) {
        console.log('error: "GET" /getdata')
    }
})

router.put('/getdata', (req, res) => {
    const request = req.body
    res.json(data)
})

router.delete('/getdata', (req, res) => {
    const request = req.body
    res.json(data)
})

module.exports = router