const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { User, Post, Comment } = require('./models/models');
const app = express();

const dbUrl = 'mongodb://localhost:27017/socialmedia';
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const testUser = new User({ name: 'Mines ACM' });
const testPost = new Post({ author: testUser._id });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  console.log("Connected to database!")
  
  testUser.biography = "A computer science club at Mines.";
  await testUser.save();
  
  console.log(testUser.name)
  
  testPost.description = "This is a post description!"
  await testPost.save()
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    console.log(testPost)
    res.render('index', { testPost });
});

app.get('/profile', (req, res) => {
  res.render('profile', { testUser });
});

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
})
