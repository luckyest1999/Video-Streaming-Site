const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const videoRoutes = require('./routes/videoRoutes'); // Import video routes
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve static files

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Register Routes
app.use('/videos', videoRoutes); // Use videoRoutes with '/videos' prefix

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
