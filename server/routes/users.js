const express = require('express');
const router = express.Router();

// Define your routes for users
router.get('/', (req, res) => {
    res.send('User list');
});

router.post('/', (req, res) => {
    res.send('Create user');
});

// Export the router
module.exports = router;
