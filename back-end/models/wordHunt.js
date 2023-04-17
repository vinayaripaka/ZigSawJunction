const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const wordHuntSchema = new mongoose.Schema({
    userId : {
        type: ObjectId,
    },
    score : {
        type: Number,
        required: true
    }
})

const WordHunt = mongoose.model('WordHunt', wordHuntSchema)

module.exports = WordHunt
