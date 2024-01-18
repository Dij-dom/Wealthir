const express = require('express');
const { loginUser, signupUser, getUserDetails } = require('../controllers/userController');


const router = express.Router();


// Login Route
router.post('/login', loginUser);

// SignUp Route
router.post('/signup', signupUser);

router.post('/', getUserDetails);

module.exports = router;