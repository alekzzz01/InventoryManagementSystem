import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
import jwt from 'jsonwebtoken';
import {User} from '../models/User.js'

router.post('/signup', async (req, res) => {
    const {username, email, password} = req.body;
    const user =  await User.findOne({email})
    
    if (user) {
        return res.json({
            message: "User already exists"
        })
    }

    const hashpassword = await bcrypt.hash(password, 10)
    const newUser = new User ({
        username,
        email,
        password: hashpassword // Only store the hashed password
    })
    

    await newUser.save()
    return res.json({status: true, message: "record registered"})
 
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ status: false, message: "User is not registered" });
        }
        
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.json({ status: false, message: "Password is incorrect" });
        }

        // Update lastLogin field
        user.lastLogin = new Date();
        await user.save();

        // Include username in the response
        const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, maxAge: 360000 });
        return res.json({ status: true, message: "Login successful", username: user.username, lastLogin: user.lastLogin });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


export {router as UserRouter}
