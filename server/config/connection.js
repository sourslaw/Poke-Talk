const path = require('path');
// require('dotenv').config({ path : path.resolve('../.env') });
// const mongoose = require('mongoose');

mongoose.connect(
  // process.env.MONGODB_URI || 'mongodb://localhost/pokemons_SHITTEST',
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

console.log('connected: ' + process.env.MONGODB_URI)

module.exports = mongoose.connection;
