const express = require('express')
const router = express.Router()
const { validateUser } = require('../controllers/login.js')

router.post('/user', validateUser)


module.exports = router