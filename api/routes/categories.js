const router = require("express").Router()
const Category = require("../modles/Category");

router.post("/", async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const saveCategory = await newCategory.save();
        res.status(200).json(saveCategory)
    } catch (err) {
        res.status(500).json({ msg: "Error while selecting the category", err })
    }
})


router.get("/", async (req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json({ msg: "Error while fetching the category", err })
    }
});

module.exports = router