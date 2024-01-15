const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Static sigunup method
userSchema.statics.signup = async function (email, username, password) {

    // Server side validation
    if (!email || !username || !password) {
        throw Error('All fields must be filled!');
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }

    const exists_email = await this.findOne({ email });
    const exists_username = await this.findOne({ username });

    if (exists_email) {
        throw Error('Email already in use!');
    }

    if (exists_username) {
        throw Error('Username already in use!');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, username, password: hash });

    return user;
}

// Static Login Method
userSchema.statics.login = async function(username, password){
    if (!username || !password){
        throw Error('All fields must be filled!');
    }

    const exists_user = await this.findOne({ username });

    if (!exists_user){
        throw Error('Incorrect username');
    }

    const match = await bcrypt.compare(password, exists_user.password);

    if(!match){
        throw Error('Incorrect password!');
    }

    return exists_user;

}

module.exports = mongoose.model('User', userSchema);