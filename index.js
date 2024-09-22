var buttonColors = ["green", "red", "yellow", "blue"];
var sequence = [];
var randomChosenColor;
var userPattern = [];
var randomNumber;
var sound;
var level = 0;
var keypressed = 0;
game();
function game(){
    setTimeout(nextSequence, 5000);
    function nextSequence() {
        userPattern.length = 0;
        level += 1;
        $("h1").text("Level " + level);
        randomNumber = Math.floor(Math.random() * 4);
        randomChosenColor = buttonColors[randomNumber];
        sequence.push(randomChosenColor);
        animationAudio(randomChosenColor);
    }

    function wrong() {
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 1000);
        playSound("wrong");
        setTimeout(function() {
            location.reload();
        }, 1000)
    }

    function animationAudio(color) {
        $("#" + color).addClass("pressed");
        playSound(color);
        setTimeout(function () {
            $("#" + color).removeClass("pressed");
        }, 100);
    }

    function playSound(music) {
        sound = new Audio("./sounds/" + music + ".mp3");
        sound.play();
    }

    function arraysEqual(arr1, arr2) {
            for (let i = 0; i < arr1.length; i++){
                if (arr2[i] !== arr1[i])
                    return false;
            }
            return true;
        
      }
  
    for (let index = 0; index < 4; index++) {
        $(".btn")[index].addEventListener("click", function (){
            if (index == 0){
                userPattern.push("green");
                animationAudio("green");
            } else if (index == 1) {
                userPattern.push("red");
                animationAudio("red");
            } else if (index == 2) {
                userPattern.push("yellow");
                animationAudio("yellow");
            } else if (index == 3) {
                userPattern.push("blue");
                animationAudio("blue");
            }
            if (arraysEqual(userPattern, sequence) == true){
                if (userPattern.length !== sequence.length){
                    
                }
                else {
                    setTimeout(nextSequence, 800);
                }
            } else {
                wrong();
            }
        });   
    }
};
