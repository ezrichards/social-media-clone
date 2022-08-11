const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String
    },
    likes: {
        type: Number
    }
    // TODO: Date for comment
});

const PostSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    likes: {
        type: Number
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
    // TODO: Date for Post
});

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    biography: {
        type: String
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = {
    User: mongoose.model('User', UserSchema),
    Comment: mongoose.model('Comment', CommentSchema),
    Post: mongoose.model('Post', PostSchema),
};
