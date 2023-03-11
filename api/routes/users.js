const router = require("express").Router()
const User = require("../modles/User");
const bcrypt = require("bcrypt");


//UPDATE USER DETAILS
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const saltPwd = await bcrypt.genSalt(15);
            req.body.password = await bcrypt.hash(req.body.password, saltPwd)
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("You can update only your account");
    }
})


//DELETE USER
router.delete("/:id", async (req, res) => {
    if (req.body.userID === req.params.id) {
        const user = await User.findById(req.params.id)
        if (user) {
            try {
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(404).json("User not found")
        }
    } else {
        res.status(401).json("You can delete only your account");
    }
})

//GET USER DETAILS

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...otherDetails } = user._doc
        res.status(200).json(otherDetails)
    } catch (err) {
        res.status(500).json({ errMsg: "Issue Occured while fetching details", err });
    }
})

module.exports = router