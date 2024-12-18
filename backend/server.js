const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173'
  })
);

// Koneksi ke MongoDB
mongoose
  .connect('mongodb://localhost:27017/sporty', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Impor rute venue
const venueRoutes = require('./routes/Venue'); // Pastikan path ini benar

// Gunakan rute venue
app.use('/api/venues', venueRoutes); // Ini akan mengarahkan ke /api/venues

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
