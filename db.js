const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', (err) => console.error('Mongo connection error:', err));
db.once('open', () => console.log('Connected to Mongo!'));

mongoose.connect('mongodb://giffinder:giffinderdb@ds135234.mlab.com:35234/giffinder');

const GifSchema = new mongoose.Schema({ //build schema of Gif
  query: String,
  image: String
});

const Gif = mongoose.model('Gif', GifSchema); //export a Gif model that uses the schema

Gif.save = (query, image, callback) => {   // save Gif to the DB
  return Gif.create({
    query: query,
    image: image
  }, callback)
}

let find = (obj) => {    // find Gif in the DB
  return Gif.find(obj)
}

module.exports.db = db
module.exports.Gif = Gif
