const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const logicalSchema = new mongoose.Schema({
    userId : {
        type: ObjectId,
    },
    score : {
        type: Number,
        required: true
    }
})

const Logical = mongoose.model('Logical', logicalSchema)

module.exports = Logical
