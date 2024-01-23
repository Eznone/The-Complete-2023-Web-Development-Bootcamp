var die1 = Math.floor(Math.random() * 6 + 1);
var newString = ("./images/dice" + die1 + ".png");
document.querySelector(".img1").setAttribute("src", newString);

var die2 = Math.floor(Math.random() * 6 + 1);
newString = ("./images/dice" + die2 + ".png");
document.querySelector(".img2").setAttribute("src", newString);

if (die1 > die2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (die1 === die2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

