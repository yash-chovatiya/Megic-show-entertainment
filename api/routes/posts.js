const router = require("express").Router()
const User = require("../modles/User");
const blog = require("../modles/Post");
const bcrypt = require("bcrypt");



//Write Post
router.post("/new", async (req, res) => {
    try {
        const newBlogPost = new blog(req.body)
        const saveBlogPost = await newBlogPost.save();
        res.status(200).json({ msg: "Blog saved", saveBlogPost });
    }
    catch (err) {
        res.status(500).json({ msg: "Error while writing a blog", err })
    }
}
)

// UPDATE Post

router.put("/:id", async (req, res) => {
    try {
        const blogPost = await blog.findById(req.params.id);
        if (blogPost.username === req.body.username) {
            try {
                const updatedUserBlogPost = await blog.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true });
                res.status(200).json({ msg: "post updated", updatedUserBlogPost })
            } catch (err) {
                res.status(500).json({ msg: "Error occured while updating the post", err });
            }
        } else {
            res.status(401).json("You can only update your post only.");
        }
    } catch (err) {
        res.status(500).json({ msg: "post not found", err })
    }
})


//DELETE Post
router.delete("/:id", async (req, res) => {
    try {
        const blogPost = await blog.findById(req.params.id);
        if (blogPost.username === req.body.username) {
            try {
                await blogPost.delete()
                res.status(200).json("post deleted");
            } catch (err) {
                res.status(500).json("Error occured while deleting the post");
            }
        } else {
            res.status(401).json("You can only delete your post only.");
        }
    } catch (err) {
        res.status(500).json({ msg: "post not found", err })
    }
})

//GET Post

router.get("/:id", async (req, res) => {
    try {
        const userPost = await blog.findById(req.params.id);
        res.status(200).json(userPost);
    } catch (err) {
        res.status(500).json({ msg: "Post not found", err })
    }
});


//GET ALL Posts

router.get("/?", async (req, res) => {
    const username = req.query.user;
    const category = req.query.category;
    try {
        let posts;
        if (username) {
            posts = await blog.find({ username });
        } else if (category) {
            posts = await blog.find({ categories: { $in: [category] } });
        } else {
            posts = await blog.find()
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ msg: "Post not found", err })
    }
});

module.exports = router