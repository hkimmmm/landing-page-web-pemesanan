const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  distance: { type: String, required: true }
});

module.exports = mongoose.model('Venue', venueSchema);
