const { Post } = require('../models/models');

module.exports.index = async(req, res) => {
    const posts = await Post.find({});
    res.render('index', { posts });
}

module.exports.createPost = async(req, res) => {
    const post = new Post(req.body.author);
    post.description = req.body.description;
    post.imageUrl = req.body.imageUrl;
    await post.save();
    res.redirect('/');
}

module.exports.deletePost = async(req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
}

module.exports.editPost = async(req, res) => { // User can only edit description
    const post = await Post.findByIdAndUpdate(req.params.id);
    post.description = req.body.description;
    await post.save();
    res.redirect('/');
}

module.exports.likePost = async(req, res) => {
    const post = await Post.findById(req.params.id);
    // check if post is liked by signed in user already, if not, like it

    res.redirect('/'); // shouldn't even need to redirect here
}
