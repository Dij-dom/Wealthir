const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '2d'})
}

const loginUser = async (req, res) =>{
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);

        // Create a token
        const token = createToken(user._id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }

};

const signupUser = async (req, res) =>{
    const {email, username, password} = req.body;

    try {
        const user = await User.signup(email, username, password);

        // Create a token
        const token = createToken(user._id)

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getUserDetails = async (req, res) =>{
    const {email} = req.body;

    const user = await User.findOne({email});

    const {username, level, ex} = user;

    res.status(200).json({username, level, ex});

}



module.exports = {loginUser, signupUser, getUserDetails};