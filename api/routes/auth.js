const router = require("express").Router()
const User = require("../modles/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
    let usernameFlag, emailFlag, fullnameFlag, passwordFlag = 0
    // regex for username
    if (/^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i.test(req.body.username)) {
        // Username check
        const userUsernameCheck = await User.findOne({ username: req.body.username })
        if (userUsernameCheck) {
            res.status(400).json({ msgFromServer: "User exists, please choose another username" })
        } else {
            usernameFlag = 1
        }
    } else {
        res.status(400).json({ msgFromServer: "Enter valid Username with atleast 5 characters" })
    }
    // regex for email
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(req.body.email)) {
        // Email check
        const userEmailCheck = await User.findOne({ email: req.body.email })
        if (userEmailCheck) {
            res.status(400).json({ msgFromServer: "Email exists, please use another email" })
        } else {
            emailFlag = 1
        }
    } else {
        res.status(400).json({ msgFromServer: "Enter valid email" })
    }
    // regex for fullname
    if (/^[a-z ,.'-]+$/i.test(req.body.fullname)) {
        fullnameFlag = 1
    } else {
        res.status(400).json({ msgFromServer: "Enter valid fullname" })
    }
    // regex for password
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(req.body.password)) {
        passwordFlag = 1
    } else {
        res.status(400).json({ msgFromServer: "Enter valid password (8-20 characters) with atleast one letter, digit and special character (#?!@$%^&*-)" })
    }

    if (usernameFlag && emailFlag && fullnameFlag && passwordFlag) {
        try {
            const saltPassword = await bcrypt.genSalt(15);
            const hashPwd = await bcrypt.hash(req.body.password, saltPassword);
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashPwd,
                fullname: req.body.fullname,
                DOB: req.body.DOB
            })
            const user = await newUser.save();
            const { password, ...otherDetails } = user._doc;
            res.status(200).json({ msgFromServer: "User created successfully", otherDetails })
        } catch (err) {
            res.status(500).json({ msgFromServer: "User already exist", err })
        }
    } else (
        res.status(500).json({ msgFromServer: "Enter correct details", err })
    )
})

//LOGIN

router.post("/login", async (req, res) => {
    try {
        const userDetails = await User.findOne({ username: req.body.username })
        !userDetails && res.status(400).json({ msgFromServer: "Wrong Credentials" })
        const validate = await bcrypt.compare(req.body.password, userDetails.password)
        !validate && res.status(400).json({ msgFromServer: "Wrong Password" })

        const { password, ...otherDetails } = userDetails._doc;
        res.status(200).json(otherDetails);
    }
    catch (err) {
        res.status(500).json({ msgFromServer: "Some Issue occured during login", err });
    }
})

module.exports = router