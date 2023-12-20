const express = require('express');
const app = express();
const userRoutes = require('./routes/users'); // Import the routes

app.use(express.json()); // Middleware for parsing JSON bodies

// Use the imported routes
app.use('/api/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
