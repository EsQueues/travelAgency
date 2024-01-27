const express = require('express');

const path = require('path');
const router = express.Router();

// Display the HTML template on GET request
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '..', 'views', 'travelagency.html');
    res.sendFile(filePath);
});

// Handle POST request and calculate tour result
router.post('/', (req, res) => {
    const country = req.body.country;
    const hotel = req.body.hotel;
    const result = `You selected ${country} and ${hotel}. Tour cost: $500`;

    res.send(result);
});

module.exports = router;
