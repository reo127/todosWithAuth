const { register, login, dashbord, logout } = require('../controllers/userAuth');
const isLogin = require('../middlewares/isLogin')
const express = require('express');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/dashbord', isLogin, dashbord);
router.get('/logout', logout);

module.exports = router;