//function executed as soon as page is loaded
$(document).ready(displayPhoto());

function displayPhoto() {

var today = new Date();

//get which day of the week today is, returns a number
var dayOfWeek = today.getDay();

console.log(dayOfWeek);

//array of images, 7 total for each day of the week
//number returned from today.getDay() corresponds with each index within array
var photos =
["images/sunday.jpg","images/monday.jpg","images/tuesday.jpg","images/wednesday.jpg",
"images/thursday.jpg","images/friday.jpg","images/saturday.jpg"];

//array of captions that correspond with each image
var captions = ["The Whiptails on the line right before a point begins.",
                "The Whiptails warming up before a game.",
                "Dana (2015), Lea (2018), and Marley (2018) hanging out between games at Georgia Southerns Tournament.",
                "Dana (2015) throwing it deep to Megan (2017) in a tense game.",
                "Megan (2017) stepping wide to throw around her mark.",
                "The team soaking wet after a rainy tournament day on Spring Break.",
                "The Whiptails’ number two favorite activity (after Ultimate!) is taking goofy selfies."];

//takes number from dayOfWeek and uses as index to get photo in array
//changes HTML by adding photo to empty "src"
$("#photoByDay img").attr("src",photos[dayOfWeek]);		

//adds caption to empty <figcaption> in HTML, also by using dayOfWeek as the index
$("#photoByDay figcaption").text(captions[dayOfWeek]);
}

