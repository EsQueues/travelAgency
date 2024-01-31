const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'views', 'travelagency.html');
    res.sendFile(filePath);
});

app.route('/travelagency')
    .get((req, res) => {
        const tours = readToursData();
        res.json({ tours });
    })
    .post((req, res) => {
        const newTour = req.body;
        const tours = readToursData();

        tours.push(newTour);

        saveToursData(tours);

        res.json({ message: 'Tour added successfully', tours });
    })
    .put((req, res) => {
        const updatedTour = req.body;
        const tours = readToursData();

        const indexToUpdate = tours.findIndex(tour => tour.id === updatedTour.id);

        if (indexToUpdate !== -1) {
            tours[indexToUpdate] = updatedTour;

            saveToursData(tours);

            res.json({ message: 'Tour updated successfully', tours });
        } else {
            res.status(404).json({ error: 'Tour not found' });
        }
    })
    .delete((req, res) => {
        const tourIdToDelete = req.body.id;
        const tours = readToursData();

        const indexToDelete = tours.findIndex(tour => tour.id === tourIdToDelete);

        if (indexToDelete !== -1) {
            tours.splice(indexToDelete, 1);

            saveToursData(tours);

            res.json({ message: 'Tour deleted successfully', tours });
        } else {
            res.status(404).json({ error: 'Tour not found' });
        }
    });

function readToursData() {
    const filePath = path.join(__dirname, 'data', 'tours.json');

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function saveToursData(tours) {
    const filePath = path.join(__dirname, 'data', 'tours.json');
    fs.writeFileSync(filePath, JSON.stringify(tours, null, 2), 'utf8');
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
