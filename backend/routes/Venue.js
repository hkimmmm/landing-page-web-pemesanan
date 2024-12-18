const express = require('express');
const Venue = require('../models/Venues');
const router = express.Router();

// Rute untuk mengambil semua venue
router.get('/', async (req, res) => {
  try {
    const venues = await Venue.find();
    res.json(venues);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching venues' });
  }
});

// Ekspor rute
module.exports = router;
