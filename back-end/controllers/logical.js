const Logical = require('../models/logical.js')
const User = require('../models/user.js')

const add = ((req, res) => {
    const newLogical = new Logical(req.body)
    try {
        newLogical.save().then((response) => {
            User.findOne({_id: req.body.userId}).then((user) => {
                user.logicalId.push(newLogical._id)
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
    const logicals = await Logical.find().sort({ score: -1 })
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
