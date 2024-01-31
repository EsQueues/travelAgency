const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '..', 'views', 'travelagency.html');
    res.sendFile(filePath);
});

router.post('/', (req, res) => {
    const country = req.body.country;
    const city = req.body.city;
    const hotel = req.body.hotel;
    const arrivalDate = req.body.arrivalDate;
    const departureDate = req.body.departureDate;
    const adults = req.body.adults;
    const children = req.body.children;
    const rooms = req.body.rooms;


    const result = {
        country: country,
        city: city,
        hotel: hotel,
        arrivalDate: arrivalDate,
        departureDate: departureDate,
        adults: adults,
        children: children,
        rooms: rooms,
        tourCost: 500
    };

    res.json(result);
});

module.exports = router;
