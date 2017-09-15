const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', (err) => console.error('Mongo connection error:', err));
db.once('open', () => console.log('Connected to Mongo!'));

mongoose.connect('mongodb://giffinder:giffinderdb@ds135234.mlab.com:35234/giffinder');


module.exports = db
