$( document ).ready(function() {
    //preset button array
    var animals = ["Alapaca", "Antelope", "Bear", "Beagle", "Capybara", "Corgi", "Donkey", "Duck", "Elephant"];
    
    //display gifs via ajax
        function display() {
            var animal = $(this).attr("data-animal")
            var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" + animal 
            + "&api_key=qPaLeFdEfKHgg81mOgTnlob8aHKHeUWP&limit=10");
    

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response.data);
    
                var results = response.data
    
                for (var i = 0; i < results.length; i++) {
    
                    var animalDiv = $("<div class='animalGif'>");
                    var p = $("<p>").text("rating: " + results[i].rating);
                    var animalImage = $("<img>");
                    animalImage.attr("src", results[i].images.fixed_height.url);
                    animalImage.attr("data-still", results[i].images.lfixed_height_still.url);
                    animalImage.attr("data-animate", results[i].images.fixed_height.url);
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    $("#gifs").prepend(animalDiv);
                };// forloop
            }); //.then

            $(document).on("click", ".animalGif", display);
            renderButtons();  
        
            $(document).on("click", "img", function(){
                var state = $(this).attr("data-state");
                if (state ==="animate") {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                } else {
                    $(this).attr("src", $(this).attr("data-animate")); 
                    $(this).attr("data-state", "animate");
                }
            
            });

        };//displayGif
   
               
           
            
    function renderBtns() {
        $("#animalButtons").empty();
        for (var i = 0; i < animals.length; i++) {
            var btn = $("<button>");
            btn.addClass("gifBtn");
            btn.attr("data-animal", animals[i]);
            btn.text(animals[i]);
            $("#animalButtons").append(btn);
        };
    }
    
    $("#addBtn").on("click", function(event) {
        event.preventDefault();
        var giphy = $("#animal-input").val().trim();
        animals.push(giphy);
        renderBtns();
    });
    
    })








//     var topics = ["Coffee", "Doughnut", "Bacon", "Eggs", "Pancakes"];

// function displayGifs() {
//     var x = $(this).attr("data-name");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//     x + "&api_key=dc6zaTOxFJmzC&limit=10";
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).done(function(response) {
//         console.log("logging");
//         console.log(response.data)
//         var results = response.data;
//         for (var i=0; i < results.length; i++) {
//            if(results[i].rating !== "r" && results[i].rating !== "pg-13"){
//                 var rating = results[i].rating;
//                 var p =$("<p>").text("Rating: " + rating);
//                 var gifDiv = $("<div class='gifs'>");
//                 var image = $("<img>");
//                 image.attr({
//                     "src": results[i].images.fixed_height.url,
//                     "data-still": results[i].images.fixed_height_still.url,
//                     "data-animate": results[i].images.fixed_height.url
//                 })
//                 gifDiv.append(image);
//                 gifDiv.append(p);
//                 $("#display-gifs").prepend(gifDiv);
//             };
//         };
//     });
// }

// function renderButtons() {
//     $("#buttons-view").empty();
//     for (var i = 0; i < topics.length; i++) {
//         var a = $("<button>");
//         a.addClass("gif btn btn-info");
//         a.attr("data-name", topics[i]);
//         a.text(topics[i]);
//         $("#buttons-view").append(a);
//     };
// }

// $("#add-gif").on("click", function(event) {
//     event.preventDefault();
//     var giphy = $("#gif-input").val().trim();
//     topics.push(giphy);
//     renderButtons();
// });

// $(document).on("click", ".gif", displayGifs);
// renderButtons();

// $(document).on("click", "img", function(){
//     var state = $(this).attr("data-state");
//     if (state ==="animate") {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//     } else {
//         $(this).attr("src", $(this).attr("data-animate")); 
//         $(this).attr("data-state", "animate");
//     }

// });

    


    
   // $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
    
//     var results = response.data
    
//     for (var i = 0; i < results.length; i++) {
    
//         var animalDiv = $("<div class ='gifs'>");
//         var p = $("<p>").text("rating: " + results[i].rating);
//         var animalImage = $("<img>");
    
//         var animated = results[i].images.fixed_height.url;
//         var paused = results[i].images.fixed_height_still.url;
            //         var still = $("<img>").attr("data-animated", animated)
            //             .attr("data-paused", paused).attr("src", paused).addclass("playOnClick");
                    
            //         animalDiv.append(p, still);
            //         // animalDiv.append(animalImage);
            //         // $("#gifs").prepend(animalDiv);
            //         $(document.on("click", function () {
            //             $(this).attr("src", $(this).data("animated"));
            //         }));
            //         $(document.on("click", function () {
            //             $(this).attr("src", $(this).data("paused"));
            //         })); 
            //         animalImage.attr("src", results[i].images.fixed-height.url);
            //         animalDiv.append(p);
            //         animalDiv.append(animalImage); 
            //         $("#gifs").prepend(animalDiv);
    // $.ajax({ 
    //     url: queryURL,
    //     method: "GET"
    // })//ajax
    // .then(function(response) {
    //     $("#addBtn").on("click", function() {
    //         var btn = document.createElement("BUTTON");
    //         var btnVal = $("#animal-input").val().trim();
    //         console.log(btn);
    //     console.log(btnVal);
    //         if ( btnVal == ""){
    //             return false; //so cannot add blank button
    //         }
    //         else {
    //         btn.appendChild(btnVal);
    //         $("#animalButtons").appendChild(btn);
    //         console.log("#animalButtons")
    //     }
        
    
    
    
    
                
                
    //api (application program interface) basically everything is an api, grabbing data
    //ajax (asynchronous javascript and xml notation): jquery function to retrieve the data (ie $.get, $.ajax)
        //allows app to run in background while fetching data 
    
    //static html vs dynamic html
    
    //when pre-loaded button is clicked, display 10 animalGifs via static html?
    
    //when animal is typed into text box
        //search giphy for gifs (api/ajax)
        //display 10 animalGifs via dynamic html(diplay after any previously loaded gifs)
    
    //when any loaded/displayed gif is clicked, diplay stillImage
        //when clicked again, startGif
    
    
    