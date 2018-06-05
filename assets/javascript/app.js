$( document ).ready(function() {
    //preset button array
    var animals = ["Alapaca", "Antelope", "Bear", "Beagle", "Capybara", "Corgi", "Donkey", "Duck", "Elephant"];
    
    //display gifs via ajax

        function displayGif() {
            var animal = $(this).attr("data-animal")
            var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" + animal 
            + "&api_key=qPaLeFdEfKHgg81mOgTnlob8aHKHeUWP&limit=10");
    

            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function(response) {
                console.log(animals);
                console.log(response.data);
    
                var results = response.data
    
                for (var i = 0; i < results.length; i++) {
    
                    var animalDiv = $("<div class='animalGif'>");

                    var rating = results[i].rating;
                    var p = $("<p>").text("rating: " + rating);

                    var animalImage = $("<img>");
                    animalImage.attr("src", results[i].images.fixed_height.url);
                    animalImage.attr("data-still", results[i].images.fixed_height_still.url);
                    animalImage.attr("data-animate", results[i].images.fixed_height.url);

                    animalDiv.append(p);
                    animalDiv.append(animalImage);

                    $("#gifsDisplay").prepend(animalDiv);
                    console.log("#gifsDisplay")
                    console.log(animalDiv)
                };// forloop
            }); //.then

            $(document).on("click", ".animalGif", displayGif());
            renderBtns();  
        
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
debugger; 
        };//displayGif
   
               
           
            
    function renderBtns() {
        $("#animalButtons").empty();
        for (var i = 0; i < animals.length; i++) {
            var btn = $("<button>");
            btn.addClass("gifBtn");
            btn.attr("data-animal", animals[i]);
            btn.text(animals[i]);
            $("#animalButtons").append(btn);
            console.log("#animalButtons")
        };
    }
    
    $("#addBtn").on("click", function(event) {
        event.preventDefault();
        var giphy = $("#animal-input").val().trim();
        animals.push(giphy);
        renderBtns();
    });
    
    })








    


    
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
    
    
    