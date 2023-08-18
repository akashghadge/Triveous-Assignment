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
    const user = await User.findOne({ name: username });
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


module.exports = router;
