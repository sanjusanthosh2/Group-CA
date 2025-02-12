const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const loginRoute = require('./login'); // Import login route

app.use(express.json()); // Middleware to parse JSON

app.use('/auth', loginRoute); // Use login route

// Serve static files from both 'src' and 'public' directories
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));  // Serve files from the 'src' folder as well

// Serve index.html when accessing the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
