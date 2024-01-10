const express = require('express');
const app = express();

// Define your API routes here
app.get('/api/users', (req, res) => {
    // Handle GET request for /api/users
    res.json({ message: 'Get all users' });
});

app.post('/api/users', (req, res) => {
    // Handle POST request for /api/users
    res.json({ message: 'Create a new user' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
