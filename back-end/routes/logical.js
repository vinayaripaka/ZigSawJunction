const express = require('express')
const router = express.Router()
const { add } = require('../controllers/logical.js')
const { sortedData } = require('../controllers/logical.js')

router.post('/add', add)
router.get('/sort', sortedData)

module.exports = router
