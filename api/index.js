const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const blogRoute = require("./routes/posts");
const blogCategoryRoute = require("./routes/categories");
const multer = require('multer');
const path = require("path");



dotenv.config();
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")))


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connect to MongoDB")).catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, fileStore) => {
        fileStore(null, 'images');
    }, filename: (req, file, fileStore) => {
        fileStore(null, req.body.name)
    }
})

const uploadFile = multer({ storage: storage });
app.post("/api/upload", uploadFile.single("file"), (req, res) => {
    res.status(200).json("File Uploaded");
})

app.use("/api/auth", authRoute);
app.use("/api/details", userRoute);
app.use("/api/blog", blogRoute);
app.use("/api/blogcategories", blogCategoryRoute);

app.listen("5005", () => {
    console.log("Backend is running");
})