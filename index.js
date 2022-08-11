const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const dbUrl = 'mongodb://localhost:27017/socialmedia';
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  console.log("Connected to database!")
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
})
