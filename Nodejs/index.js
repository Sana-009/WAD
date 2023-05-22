const express = require('express');
const path = require('path');

const app = express();

const port = 3000; // Change the port number if desired

// Set the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
  });



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
