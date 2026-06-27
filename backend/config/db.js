const mongoose = require('mongoose');

// Connects to MongoDB Atlas. Deliberately does NOT crash the process on
// failure — during early development you may want to demo the API shape
// (e.g. /api/health) before Atlas credentials are wired up.
const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.warn('MONGO_URI not set — skipping MongoDB connection. Add it to your .env file.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
};

module.exports = connectDB;
