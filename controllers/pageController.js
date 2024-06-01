const Post = require("../models/Post")

function getAboutPage(req,res){
    res.render("about")
}
function getAddPage(req,res){
    res.render("add_post")
}
function getPostPage(req,res){
    res.render("post")
}
async function getEditPage(req,res){
    const post = await Post.findOne({ _id: req.params.id });
    res.render("edit", {
        post
    })
}

module.exports = {
    getAboutPage,
    getAddPage,
    getPostPage,
    getEditPage
}