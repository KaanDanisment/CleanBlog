const Post = require("../models/Post")

async function getAllPosts(req,res){
    const posts = await Post.find({})
    res.render("index", {
        posts
    })
}

async function getPost(req,res){
    const post = await Post.findById(req.params.id);
    res.render("post", {
        post
    })
}

async function createPost(req,res){
    await Post.create(req.body)
    res.redirect("/")
}

async function updatePost(req,res){
    const post = await Post.findOne({_id: req.params.id})
    post.title = req.body.title
    post.detail = req.body.detail
    post.save()

    res.redirect(`/post/${req.params.id}`)
}

async function deletePost(req,res){
    const post = await Post.findByIdAndDelete({_id: req.params.id})
    res.redirect("/")
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}

