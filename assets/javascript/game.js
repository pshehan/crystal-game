var randomResult;
var lose = 0;
var win = 0;
var previous = 0;

var fresh = function () {
//When the game begins , the player should see a new random number.
        $(".crystals-row").empty();

            var images = [
             'assets/images/crystal1.jpg',
             'assets/images/crystal2.jpg',
             'assets/images/crystal3.jpg',
             'assets/images/crystal4.jpg',
            
            ];
    //The player will be shown a random number at the start of the game.
    //The random number shown at the start of the game should be between 19 - 120.
            randomResult = Math.floor((Math.random() * 100) + 19);

            $("#result").html("Try to guess: " + randomResult);

            for (var i = 0; i < 4; i++) {
            
                var crystalButton = $("<div>");
                    //Each crystal should have a random hidden value between 1 - 12.
                var random = Math.floor(Math.random() * 12) + 1;


                crystalButton.attr({
                    "class": 'crystalButton',
                    "data-random": random,
                });
                
                crystalButton.css({
                    "background-image":
                    "url('" + images[i] + "')",
                    "background-size": "cover"
               });


                $(".crystals-row").append(crystalButton);
            
    }
    //The app should show the number of games the player wins and loses. 
    $("#previous").html("Total Score: " + previous);
}

fresh();
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
$(document).on("click", ".crystalButton", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html(previous);
//The player loses if their score goes above the random number.

    if (previous > randomResult) {
        lose++;

        $("#lose").html(lose);
        previous = 0;
//the game restarts whenever the player loses.
        fresh();
        alert("you lose")

        //The player wins if their total score matches the random number 
    } else if (previous === randomResult) {
        win++;
        $("#win").html(win);

        previous = 0;
//the game restarts whenever the player wins.
        fresh();
        alert("you win");
    }

});
    //STILL NEED TO INCORPORATE
    //Your game will hide this amount until the player clicks a crystal.
    //When they do click one, update the player's score counter.