const express = require("express")
const path = require("path")
const ejs = require("ejs")

const app = express();

//TEMPLATE ENGINE
app.set("view engine","ejs")

//MİDDLEWARES
app.use(express.static("public"));

// ROUTES
app.get("/",(req,res) => {
    res.render("index")
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

const port = 5000
app.listen(port, ()=>{
    console.log(`Server started in port ${port} `)
})