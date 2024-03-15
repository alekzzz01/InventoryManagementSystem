import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
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

export {router as UserRouter}
