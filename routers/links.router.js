const router = require('express').Router()
const Schema = require('../mongoose/schema/schema')



router.get('/t/:id', (req, res) => {
    try {
        const params = req.params
        console.log(req.params)
        res.redirect('http://google.com')
    } catch (error) {
        console.log('error: "GET" /getdata')
    }
})

module.exports = router