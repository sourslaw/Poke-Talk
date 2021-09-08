const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const adoptionSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  pokemon: {
    type: Schema.Types.ObjectId,
    ref: 'Pokemon'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const Adoption = model('Adoption', adoptionSchema);

module.exports = Adoption;