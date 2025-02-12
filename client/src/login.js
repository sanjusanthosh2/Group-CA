const express = require('express');
const router = express.Router();

// Sample in-memory users (could be replaced with a database)
const users = [];

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        return res.json({ message: "Login successful!" });
    } else {
        return res.json({ message: "Invalid username or password!" });
    }
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if username already exists
    if (users.find(user => user.username === username)) {
        return res.json({ message: "Username already exists!" });
    }

    // Register the new user
    users.push({ username, password });
    return res.json({ message: "Registration successful!" });
});

module.exports = router;
