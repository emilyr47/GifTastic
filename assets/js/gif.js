src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
var topics = ["Pizza", "Hamburger", "Fries", "Pasta" , "Egg Roll" , "Pancakes" , "Ice Cream" , "Coffee" , "Tacos" , "Fried Chicken"];


    $("#pizza-button").on("click", function() { // event listener

      
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=pizza"; // Storing giphy API URL


      
      $.ajax({ // AJAX Get request
        url: queryURL,
        method: "GET"
      })

        .then(function(response) {

          var imageUrl = response.data.image_original_url; // after loaded

      
          var pizzaImage = $("<img>"); // storing image tag

          pizzaImage.attr("src", imageUrl); //setting up the pizza images with their URL
          pizzaImage.attr("alt", "pizza image");
          pizzaImage.attr("id", "pizza image");


          $("#images").prepend(pizzaImage); //prepending the gifs
        });
    });
    $("#burger-button").on("click", function() {

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=burger";


$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var burgerImage = $("<img>");

    burgerImage.attr("src", imageUrl);
    burgerImage.attr("alt", "burger image");
    burgerImage.attr("id", "burger image");


    $("#images").prepend(burgerImage);
  });
});
  $("#fries-button").on("click", function() {

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=fries";


$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var friesImage = $("<img>");

    friesImage.attr("src", imageUrl);
    friesImage.attr("alt", "fries image");
    friesImage.attr("id", "fries image");


    $("#images").prepend(friesImage);
  });
});
  $("#pasta-button").on("click", function() {

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=pasta";


$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var pastaImage = $("<img>");

    pastaImage.attr("src", imageUrl);
    pastaImage.attr("alt", "pasta image");
    pastaImage.attr("id", "pasta image");


    $("#images").prepend(pastaImage);
  });
});
  $("#eggRoll-button").on("click", function() {

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=eggroll";


$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var eggRollImage = $("<img>");

    eggRollImage.attr("src", imageUrl);
    eggRolImage.attr("alt", "eggRoll image");
    eggRollImage.attr("id", "eggRoll image");


    $("#images").prepend(eggRollImage);
  });
});
  $("#pancakes-button").on("click", function() {

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=pancakes";


$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var pancakesImage = $("<img>");

    pancakesImage.attr("src", imageUrl);
    pancakesImage.attr("alt", "pancakes image");
    pancakesImage.attr("id", "pancakes image");


    $("#images").prepend(pancakesImage);
  });
});
  $("#iceCream-button").on("click", function() {

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=icecream";


$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var iceCreamImage = $("<img>");

    iceCreamImage.attr("src", imageUrl);
    iceCreamImage.attr("alt", "iceCream image");
    iceCreamImage.attr("id", "iceCream image");


    $("#images").prepend(iceCreamImage);
  });
});
  $("#coffee-button").on("click", function() {

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=coffee";


$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var coffeeImage = $("<img>");

    coffeeImage.attr("src", imageUrl);
    coffeeImage.attr("alt", "coffee image");
    coffeeImage.attr("id", "coffee image");


    $("#images").prepend(coffeeImage);
  });
});
  $("#tacos-button").on("click", function() {

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=tacos";


$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var tacosImage = $("<img>");

    tacosImage.attr("src", imageUrl);
    tacosImage.attr("alt", "tacos image");
    tacosImage.attr("id", "tacos image");


    $("#images").prepend(tacosImage);
  });
});
  $("#friedChicken-button").on("click", function() {

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=friedchicken";


$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var friedChickenImage = $("<img>");

    friedChickenImage.attr("src", imageUrl);
    friedChickenImage.attr("alt", "friedChicken image");
    friedChickenImage.attr("id", "friedChicken image");


    $("#images").prepend(friedChickenImage);
  });
  });

  $("#add-item").on("click", function(event) { // wh


        function renderButtons() { // displays topics data

        // this section is not working properly.  What should be happening is that the new food item added should print to the screen as a new button
        // and that button should have the value of that food item and the item should be added to the array.
        // Currently, the last letter of the entered item is being added to the page without the button, and I am unsure as to why. 
          //$("#item-view").empty();
          for (var i = 0; i < topics.length; i++) { // for loop thats creates a button for each item in the array
            var button = $("<button>"); // adds button
            button.addClass("item"); // gives it the class item
            button.attr("data-name", topics[i]); // add it to array
            button.html(item[i]); // prints button to html
            $("#images").html(item[i]); // prints the balue of the button on the html
            $("#item-view").append(button); // puts it at the end
          }
        }
          event.preventDefault();
          var item = $("#item-input").val().trim();
          topics.push(item);
          renderButtons();
        });
        
    
    
