const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('static'));

var r_25 = ['Teriyaki Chicken', 'Spinach artichoke pasta', 'Coconut curry chicken', 'Greek gyros with tzatziki sauce', 'General Tso Meatballs', 'Chickpea Waldorf Salad', 'Fettuccine Alfredo', 'Garlic glazed salmon'];
var r_5 = ['Tofu Banh Mi', 'Sandwiches for lunch', 'Breakfast sandwiches', 'Green goddess sandwiches', 'Toasted pan bagnat', 'Veg grilled sandwiches', 'Tomato cucumber sandwich', 'Russian tea sandwiches'];


app.get('/', (req, res) => {
    res.sendFile(__dirname + 'static/index.html');
});
app.listen(PORT, () => {
    console.log("Server listening on port 3000!");
})