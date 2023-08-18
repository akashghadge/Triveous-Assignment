const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//models and middlewares  
const User = require("../models/User");

const { handleErrors } = require("../helpers/handleErrors");

async function isUserExists(email) {
    try {
        let user = await User.find({ email: email });
        if (user.length !== 0)
            return true;
        return false;
    }
    catch (err) {
        throw new Error(err)
    }
}

router.post("/create", async (req, res) => {
    const { name, password } = req.body;
    try {
        console.log("hello")
        if (await isUserExists(name)) {
            return res.status(409).json("user already exits !!");
        }
        let newUser = new User({
            name: name,
            password: password,
        });
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (err) {
        let error = handleErrors(err);
        res.status(404).json(error);
    }
})
router.post("/in", async (req, res) => {
    const { name, password } = req.body;
    const user = await User.findOne({ name: name });
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            let payload = {
                name: name,
                id: user._id
            }

            let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 });
            res.status(200).json({ "jwt": accessToken })
        }
        else {
            res.status(400).json("invalid password");
        }
    } else {
        res.status(401).json("invalid username");
    }
})

router.get('/all', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});


router.delete('/all', async (req, res) => {
    try {
        const deletedUser = await User.deleteMany({});
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
});


module.exports = router;
