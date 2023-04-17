const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(express.json())


const loginApi = require('./routes/login.js')
const signupApi = require('./routes/signup.js')
const wordHuntApi = require('./routes/wordHunt.js')
const logicalApi = require('./routes/logical.js')


const CONNECTION_URL = 'mongodb+srv://mahesh:mahesh@cluster0.brlp0pk.mongodb.net/test'
mongoose.connect(CONNECTION_URL).then((res) => {
    console.log('DB connected')
}).catch((err) => {
    console.log('DB not connected\n', err)
})

const PORT = 8000
app.listen(PORT, (err) => {
    if(err)console.log('Server not started')
    else console.log('Server started and running successfully at', PORT)
})


app.use('/api/login', loginApi)
app.use('/api/signup', signupApi)
app.use('/api/wordhunt', wordHuntApi)
app.use('/api/logical', logicalApi)
