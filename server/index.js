const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');
const app = express();
const PORT = 3000;

//Middleware
app.use(express.static('static'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var r_25 = ['Teriyaki Chicken', 'Spinach artichoke pasta', 'Coconut curry chicken', 'Greek gyros with tzatziki sauce', 'General Tso Meatballs', 'Chickpea Waldorf Salad', 'Fettuccine Alfredo', 'Garlic glazed salmon'];
var r_15 = ['Taco Salad', 'Chicken Pasta', 'The real reuben sandwich', 'Healthy roasted chicken and veggies', 'Quick brownbag burritos', 'Chinese chicken fried rice', 'Chicago style hot dog',  'Great garlic beer steaks'];
var r_5 = ['Tofu Banh Mi', 'Sandwiches for lunch', 'Breakfast sandwiches', 'Green goddess sandwiches', 'Toasted pan bagnat', 'Veg grilled sandwiches', 'Tomato cucumber sandwich', 'Russian tea sandwiches'];
var recipes = r_5.concat(r_15, r_25);

var recipesToLinks = {
    "Sandwiches for lunch!": "https://cleananddelicious.com/easy-sandwich-recipes-for-school-work/",
    "Breakfast sandwiches!": "https://cookieandkate.com/veggie-breakfast-sandwich-recipe/", 
    "Green goddess sandwiches!": "https://bojongourmet.com/green-goddess-sandwiches/", 
    "Tofu Banh Mi":"http://foodfitnessfreshair.com/2015/12/06/tofu-banh-mi/"
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'static/index.html');
});

app.post('/search', (req, res) => {
   const query = req.body.search;
   console.log(query);
   var recipes = [];
   for(var recipe in Object.keys(recipesToLinks)){
        if(Object.keys(recipesToLinks)[recipe].includes(query)){

            var rec = Object.keys(recipesToLinks)[recipe];
            var link = recipesToLinks[recipe];
            recipes.push(
                {
                    recipe:link
                }
                    
            );
        }
   }
   console.log(recipes);
   if(recipes.length > 0){
       res.send(recipes);
   }else{
       res.send("Not found!");
   }
});

app.listen(PORT, () => {
    console.log("Server listening on port 3000!");
})