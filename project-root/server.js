const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
const travelRoutes = require('./routes/travelRoutes');
app.use('/travelagency', travelRoutes);

// Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
