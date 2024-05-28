const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const ejs = require("ejs");
const post = require("./models/Post")

const app = express();

//connect DB
mongoose.connect("mongodb://localhost/cleanblog-test-db")

//TEMPLATE ENGINE
app.set("view engine","ejs")

//MİDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// ROUTES
app.get("/", async (req,res) => {
    const posts = await post.find({})
    res.render("index", {
        posts
    })
})
app.get("/about",(req,res) => {
    res.render("about")
})
app.get("/add_post",(req,res) => {
    res.render("add_post")
})
app.get("/post",(req,res) => {
    res.render("post")
})
app.post("/posts",async (req,res) => {
    await post.create(req.body)
    res.redirect("/")
})

const port = 5000
app.listen(port, ()=>{
    console.log(`Server started in port ${port} `)
})