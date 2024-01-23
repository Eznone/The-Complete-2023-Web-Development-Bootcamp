/* Next lines handle an alert popping up when clicking on any button */
var numOfDrumButtons = document.querySelectorAll(".drum").length;

function handleClick() {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
}

for (var i = 0; i < numOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    
}