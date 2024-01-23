function BMICalculator(weight, height){
    var part1 = "Your BMI is ";
    var part3 = " so you are ";

    height = height * height;
    var bmi = weight / height;

    if (bmi < 18.5) {
        var interpretation = part1 + bmi + part3 + "underweight";
    }

    else if(bmi < 24.9) {
        var interpretation = part1 + bmi + part3 + "normal weight";
    }

    else {
        var interpretation = part1 + bmi + part3 + "over weight";
    }

    return interpretation;
}

console.log(BMICalculator(1, 1));