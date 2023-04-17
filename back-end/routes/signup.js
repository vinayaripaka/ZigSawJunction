const express = require('express')
const { add } = require('../controllers/user.js')
const router = express.Router()

router.post('/user', add)

module.exports = router