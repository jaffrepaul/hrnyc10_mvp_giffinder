// ========== Requires
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');

// ========== Server
const app = express();


// ========== Middleware
app.use(bodyParser.urlencoded({ extended: false })); //get data from form & add boy to req obj

// ========== Routes
app.get('/gifs', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  //do the find({}) move from last sprints
})

app.post('/gif', (req, res) => {
  db.collection('gifs').save(req.body, (err, result) => {
    if (err) console.log(err);
    console.log('saved to db!');
    res.send(result);
    // res.send('/');
  })
})




app.listen(3000, function() {
  console.log('listening in port 3000');
});
