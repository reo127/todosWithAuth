const jwt = require('jsonwebtoken');
const User = require('../schema/userSchema')


// Check user Login or not
const isLogin = async (req, res, next) => {
    try {
        // Check cookies
        const cookie = req.cookies.token || req.body.token
        if (!cookie) {
            res.status(400).send('cookies not found')
        }

        // Extract user Information
        const userInfo = jwt.verify(cookie, process.env.SERECT)

        const user = await User.findById({_id: userInfo.user_id})
        user.password = undefined
        res.user = user;

        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = isLogin;