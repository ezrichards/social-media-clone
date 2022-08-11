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
    description: String,
    likes: {
        type: Number,
        default: 0,
        likedBy: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const PostSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: String,
    imageUrl: String,
    likes: {
        type: Number,
        default: 0,
        likedBy: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    date: {
        type: Date,
        default: Date.now()
    }
});

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    biography: String,
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
