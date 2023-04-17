const express = require('express')
const router = express.Router()
const { add, sortedData } = require('../controllers/wordHunt.js')

router.post('/add', add)
router.get('/sort', sortedData)

module.exports = router
