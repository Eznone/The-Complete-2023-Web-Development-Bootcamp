function lifeInWeeks(age){
    var remainingYears = 90 - age;
    var remainingMonths = remainingYears * 12;
    var remainingWeeks = remainingMonths * 52;
    var remainingDays = remainingYears * 365;
    console.log("You have " + remainingYears + " years " + remainingMonths + " months " + remainingDays + " days remaining");
}

lifeInWeeks(20);