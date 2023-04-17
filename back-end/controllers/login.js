const User = require('../models/user.js')

const validateUser = ((req, res) => {
    User.findOne({email : req.body.email, password : req.body.password})
        .then((user) => {
            res.json({
                status: 200,
                user: user
            })
        }).catch((err) => {
            console.log(err)
        })
})

module.exports = {
    validateUser
}