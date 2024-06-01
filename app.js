const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const path = require("path")
const ejs = require("ejs");
const Post = require("./models/Post")

const postController = require("./controllers/postController")
const pageController = require("./controllers/pageController")

const app = express();

//connect DB
mongoose.connect("mongodb://localhost/cleanblog-test-db")

//TEMPLATE ENGINE
app.set("view engine","ejs")

//MİDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method', {
    methods:["POST","GET"]
}))


// ROUTES
app.get("/", postController.getAllPosts)
app.get("/post/:id", postController.getPost)
app.post("/post",postController.createPost)
app.put("/post/:id", postController.updatePost)
app.delete("/post/:id",postController.deletePost)

app.get("/about", pageController.getAboutPage)
app.get("/add_post", pageController.getAddPage)
app.get("/post",pageController.getPostPage)
app.get("/post/edit/:id", pageController.getEditPage)


const port = 5000
app.listen(port, ()=>{
    console.log(`Server started in port ${port} `)
})