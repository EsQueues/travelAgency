// script.js
function calculateTour() {
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const hotel = document.getElementById('hotel').value;
    const arrivalDate = document.getElementById('arrivalDate').value;
    const departureDate = document.getElementById('departureDate').value;
    const adults = parseInt(document.getElementById('adults').value, 10);
    const children = parseInt(document.getElementById('children').value, 10);
    const rooms = parseInt(document.getElementById('rooms').value, 10);

    const totalPrice = calculatePrice(adults, children, rooms);

    const resultHtml = `
        <h4>Your Tour Details:</h4>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Hotel:</strong> ${hotel}</p>
        <p><strong>Arrival Date:</strong> ${arrivalDate}</p>
        <p><strong>Departure Date:</strong> ${departureDate}</p>
        <p><strong>Number of Adults:</strong> ${adults}</p>
        <p><strong>Number of Children:</strong> ${children}</p>
        <p><strong>Number of Rooms:</strong> ${rooms}</p>
        <p><strong>Total Price:</strong> $${totalPrice}</p>
    `;

    document.getElementById('tourResult').innerHTML = resultHtml;
}

function calculatePrice(adults, children, rooms) {
    const adultPrice = 100;
    const childPrice = 50;
    const roomPrice = 200;

    return (adults * adultPrice) + (children * childPrice) + (rooms * roomPrice);
}
