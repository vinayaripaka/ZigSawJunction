const WordHunt = require('../models/wordHunt.js')
const User = require('../models/user.js')

const add = ((req, res) => {
    const newWordHunt = new WordHunt(req.body)
    try {
        newWordHunt.save().then((response) => {
            User.findOne({_id: req.body.userId}).then((user) => {
                user.wordHuntId.push(newWordHunt._id)
                user.save().then((r) => {
                    res.json({
                        status: 200,
                        description: "Score added successfully"
                    })
                })
            })
        })
    } catch (error) {
        console.log(error)
    }
})

const sortedData = (async (req,res) => {
    let data = []
    const logicals = await WordHunt.find().sort({ score: -1 })
    for(var i = 0; i < logicals.length; i++){
        await User.findOne({_id: logicals[i].userId}).then((user) => {
            data.push({user: user.name, score: logicals[i].score})
        })
        if(i == logicals.length - 1)res.json({data: data})
    }
})

module.exports = {
    add, sortedData
}
