const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); // we won't use this just yet!
const ejs = require('ejs'); // we won't use this just yet!
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/example', (req, res) => {
    res.send("<h1>Hello, world!</h1>")
})

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
})
