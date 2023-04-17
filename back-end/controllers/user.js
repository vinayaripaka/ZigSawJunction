const User = require('../models/user.js')

const add = ((req,res) => {
    const newUser = new User(req.body) 
    try {
        newUser.save().then((response) => {
            res.json({
                status: 200,
                description : 'User created successfully'
            })
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = {
    add
}