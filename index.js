// Import required modules
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();
require('dotenv').config();

const apiRoutes = require('./api');
const connect = require('./db/connect');
connect();

// Enable CORS for all routes
app.use(cors());

// Define a sample route
app.get('/', (req, res) => {
  res.status(200).send('Lesssssss go');
});

//Here goes the API
app.use('/api', apiRoutes)

// Define the port for your server
const port = process.env.PORT || 8000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
