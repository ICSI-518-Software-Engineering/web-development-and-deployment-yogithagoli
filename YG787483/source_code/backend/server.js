const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5173;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/add', (req, res, next) => {
  try {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Both num1 and num2 must be numbers');
    }

    const result = num1 + num2;
    res.json({ result });
  } catch (error) {
    next(error); // Pass error to the error handling middleware
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
