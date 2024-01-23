function BMICalculator(kilos, meters){
    var denomenator = meters * meters;
    var calculatedBMI = kilos / denomenator;
    return calculatedBMI;
}

console.log(BMICalculator(49.5, 1.55448));