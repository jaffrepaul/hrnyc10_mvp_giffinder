// ========== Requires
const express = require('express');
const path = require('path');
// const giphy = require( 'giphy' )( '865215fd0a6e409cad4b6931a17b4ad4' );
const secrets = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');
const {Gif, db} = require('./db');

// ========== Server
const app = express();

// ========== Middleware
app.use(express.static(path.resolve(__dirname, './public')))
app.use(bodyParser.urlencoded({ extended: false })); //get data from form & add body to req obj
app.use(bodyParser.json()) // parse application/json

// ========== Routes
// v1:
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

// send user req to server
app.post('/gif', (req, res) => {  // New entry created (data from Giphy)

  console.log('POST req:', req.body.query); //dog

  // get data from Giphy
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.body.query}&api_key=${process.env.GIPHY_API}&limit=5`)
  .then(function(response) {
    Gif.save(req.body)
    res.send(response);
  })
});

//   db.collection('gifs').save(req.body, (err, result) => {
//     if (err) console.log(err);
//     console.log('saved to db!');
//     res.send(req.body);
//     // res.send('/');
//   })
// })

app.get('/gifs', function(req, res) { // Returns everything from our DB in an array
  Gif.find({})
    .then(function(gifs) {
      res.send(gifs);
    });
  console.log('Got everything from DB');
});

// ==========getOne, put, delete
// app.get('/gifs', function(req, res) { // Returns one entry from our DB
//   Gif.findOne({query: 'dog'})
//     .exec(function(err, data) {
//       if (err) {
//         console.err(err);
//       } else {
//         res.send(data)
//       }
//     })
//   res.send('Got one entry from DB');
// });
//
// app.put('/gifs', function(req, res) { // Updates an existing entry
//   res.send('Entry updated in DB');
// });
//
// app.delete('/gifs', function(req, res) { // Deletes an existing entry
//   res.send('Entry deleted from DB');
// });


// ========== Tell server where to listen
app.listen(3000, function() {
  console.log('listening in port 3000');
});
