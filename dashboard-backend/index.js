const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // Instantiate express app

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Endpoint to Fetch Insights
app.get('/api/insights', async (req, res) => {
  try {
    console.log("Hi")
    // Fetch insights directly from the "data" collection
    const insights = await mongoose.connection.db.collection('data').find().toArray();
    console.log(insights)
    res.json(insights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000; // Set port to 5000 to match frontend
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/DashBoardDatabase', {
  
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));
