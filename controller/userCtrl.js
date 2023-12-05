const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");


const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        const newUser = User.create(req.body);
        res.json(newUser);
    }
    else {
        throw new Error("User Alrady Exists");
    }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser && await findUser.isPasswordMatched(password)) {
        res.json({
            id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),

        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

// GET ALL USERS
const getallUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    }
    catch {
        throw new Error(error)
    }
});

// GET A SINGLE USER
const getaUser = asyncHandler(async (req, res) => {

    const { id } = req.params;
    try {
        const getaUsers = await User.findById(id);
        res.json({ getaUser });
    }
    catch {
        throw new Error(error)
    }
});

module.exports = { createUser, loginUserCtrl, getallUser, getaUser };