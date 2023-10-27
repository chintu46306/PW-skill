
const User = require('../models/userModel.js')


exports.home = (req, res) => {
    res.send('Hello World');
}


exports.createUser = async(req, res) => {
    // extract info 
    try{
       const {name, email} = req.body

     const user = await User.create({
        name,
        email
    })

    res.status(201).json({
        status:true,
        message: "User created successfully",
        user
    })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            status:false,
            message: error.message,
        })

    }
}