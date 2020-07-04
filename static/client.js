var random = document.getElementById('random');

var r_25 = ['Teriyaki Chicken', 'Spinach artichoke pasta', 'Coconut curry chicken', 'Greek gyros with tzatziki sauce', 'General Tso Meatballs', 'Chickpea Waldorf Salad', 'Fettuccine Alfredo', 'Garlic glazed salmon'];
var r_15 = ['Taco Salad', 'Chicken Pasta', 'The real reuben sandwich', 'Healthy roasted chicken and veggies', 'Quick brownbag burritos', 'Chinese chicken fried rice', 'Chicago style hot dog',  'Great garlic beer steaks'];
var r_5 = ['Tofu Banh Mi', 'Sandwiches for lunch', 'Breakfast sandwiches', 'Green goddess sandwiches', 'Toasted pan bagnat', 'Veg grilled sandwiches', 'Tomato cucumber sandwich', 'Russian tea sandwiches'];
var recipes = r_5.concat(r_15, r_25);

var random_urls = ["https://www.delish.com/cooking/recipe-ideas/recipes/a55762/honey-garlic-glazed-salmon-recipe/", "https://cleananddelicious.com/easy-sandwich-recipes-for-school-work/", "http://foodfitnessfreshair.com/2015/12/06/tofu-banh-mi/", "https://lizoncall.com/taco-salad-15minutesuppers/", "https://gimmedelicious.com/quick-easy-15-minute-chicken-pasta/", "https://www.delish.com/cooking/recipe-ideas/recipes/a58552/general-tso-meatballs-recipe/"];

random.addEventListener('click', () => {
    var randIdx = Math.random() * random_urls.length;
    randIdx = parseInt(randIdx, 10);

    window.open(random_urls[randIdx]);
});