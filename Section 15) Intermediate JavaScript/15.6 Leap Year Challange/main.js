/* Same thing as python with the same logic as any other language*/

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
  alert("Welcome");
}
else {
  alert("Sorry, maybe next time");
}

function isLeapYear(year) {
    if (year % 4 == 0) {
      if (year % 100 != 0) {
        return "Is a leap year";
      } else if (year % 400 == 0) {
        return "Is a leap year";
      } else {
        return "Is not a leap year";
      }
    } else {
      return "Is not a leap year";
    }
  }
  console.log(isLeapYear(1900));
  console.log(isLeapYear(1916));
  console.log(isLeapYear(2000));
  