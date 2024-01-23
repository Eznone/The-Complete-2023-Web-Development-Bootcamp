/* Next function is for handling audio */
function playAudio(fileLocation) {
    var audio =  new Audio(fileLocation);
    audio.play();
}

/* Next function determines which sound will be player based on key */
function makeSound(key) {

    switch (key) {
        case "w":
            playAudio("./sounds/tom-1.mp3");
            break;

        case "a":
            playAudio("./sounds/tom-2.mp3");
            break;
        
        case "s":
            playAudio("./sounds/tom-3.mp3");
            break;

        case "d":
            playAudio("./sounds/tom-4.mp3");
            break;

        case "j":
            playAudio("./sounds/crash.mp3");
            break;

        case "k":
            playAudio("./sounds/kick-bass.mp3");
            break;

        case "l":
            playAudio("./sounds/snare.mp3");
            break;
    }

}

/* Next function is to trigger button animation */
function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

/* Next lines handle an alert popping up when clicking on any button with mouse */
var numOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

/* Next lines handle key press event for w,a,s,d,j,k,l */
document.addEventListener("keydown", function(event) {
    var key = event.key;
    makeSound(key);
    buttonAnimation(key);
});


