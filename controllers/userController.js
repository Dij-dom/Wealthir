const userModel = require('../models/userModel');


const loginController = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({email, password});
        if (!user){
            return res.status(400).send('User not found');
        }
        res.status(200).json({
            success:true,
            user
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            error
        })
    }

}

const registerController= async () =>{
    try {
        const newUser = new userModel(res.body);
        await newUser.save();
        res.status(201).json({
            success:true,
            newUser
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            error
        });
    }
}

module.exports = {loginController, registerController}