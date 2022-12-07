const bcrypt = require('bcryptjs');
const User = require('../schema/userSchema');
const jwt = require('jsonwebtoken');


// Route for Creating/Register user
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check all filed have data or not
        if (!(name || email || password || conformPassword)) {
            res.status(400).send('All filds are requied')
        }

        // Check user already exist or not
        const existUser = await User.findOne({ email })
        if (existUser) {
            res.status(400).send('User aleady exist')
        }

        //  Hash password and Create user
        const hashPass = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashPass })

        user.password = undefined
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}


// Login Router
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check all filed have data or not
        if (!( email || password )) {
            res.status(400).send('All filds are requied');
        }

        // Check email is exist or not
        const user = await User.findOne({email});
        if(!user){
            res.status(400).send('User not found, Place Login First');
        }

        // Check password
        const checkPass = await bcrypt.compare(password, user.password );
        if(!checkPass){
            res.status(400).send('Worng password, Try again');
        }

        // Create token
        const token = jwt.sign(
            {user_id: user._id, email: user.email},
            process.env.SERECT,
            {expiresIn: '2h'}
            );

        // Set cookeis
        res.cookie('token', token);
        user.password = undefined;
        res.status(201).json({
            success: true,
            message: "User Login successfully",
            user
        });

    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.send('Logout successfull')
}

// Dashbord
exports.dashbord = async ( req, res ) => {
    const user = res.user;
    res.json(user);
}