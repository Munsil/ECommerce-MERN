const User= require("../models/userModel");
const asyncHandler = require("express-async-handler");
const createUser = async (req, res) =>{
    const email = req.body.email;
    const findUser = await User.findOne({email : email});
    if(!findUser){
        const newUser = User.create(req.body);
        res.json(newUser);
    }
    else{
        res.json({
            msg: "User Already Exists",
            success : false,
        });
    }
};

module.exports = {createUser};