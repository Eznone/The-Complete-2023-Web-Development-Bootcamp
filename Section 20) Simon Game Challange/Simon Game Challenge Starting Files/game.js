let colors = ["red", "green", "yellow", "blue"]
let sequence = [];
let level = 0;
let started = false;
let playerTurn = false;
let playerIndex = 0;

function updateLevel() {
  level++;
  $("#level-title").text("Level: " + level);
}

function playAudio(fileLocation) {
  var audio =  new Audio(fileLocation);
  audio.play();
}

function playAnimation(location){
  $(location).animate({opacity: 0.5}).delay(100).animate({opacity: 1});
}

function choseRandomColor() {
  var num = Math.floor(Math.random() * colors.length)
  return (colors[num])
}

function printSequence() {
  for (var i = 0; i < sequence.length; i++){
    console.log(sequence[i] + "---");
  }
}

function playSequence() {
  for (var i = 0; i < sequence.length; i++) {
    (function(index) {
      setTimeout(function() {
        console.log(sequence[index]);
        playAnimation("#" + sequence[index]);
        playAudio("./sounds/" + sequence[index] + ".mp3");
        console.log("In loop still");
      }, index * 1100);
    })(i);
  }

  setTimeout(function() {
    playerTurn = true;
    console.log("turned on");
  }, sequence.length * 1100);
}

function gameOver() {
  sequence = [];
  level = 0;
  started = false;
  playerTurn = false;
  playerIndex = 0;
  $("h1").text("Game Over")
  for (var i = 0; i < 6; i++) {
    (function(index){  
      setTimeout(function() {
        $("body").toggleClass("game-over");
        console.log(index);
      }, index * 200);
    })(i);
  }
  setTimeout(function() {
    $("#level-title").text("Press A Key to Start")
  }, 6 * 200);
}


$(".btn").on("click", function() {
  if (playerTurn){
    console.log(sequence.length);
    if (playerIndex <= sequence.length){
      if (this.id !== sequence[playerIndex]) {
        gameOver();
        return false;
      }
      else {
        playAnimation("#" + sequence[playerIndex]);
        playAudio("./sounds/" + sequence[playerIndex] + ".mp3");
        playerIndex++;
        console.log("correct");
      }
    }
    if (playerIndex === sequence.length){
      playerTurn = false;
      console.log("Should end here");
      playerIndex = 0;
      setTimeout(function() {
        nextSequence();
      }, 2000);  
    }
  }
  
  
});

function nextSequence() {
  updateLevel();
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = colors[randomNumber];
  sequence.push(randomChosenColour);
  printSequence();
  playSequence();
}



$("body").keydown(function() {
  if (!started){
    nextSequence(0);
    started = true;
  }
  
});


