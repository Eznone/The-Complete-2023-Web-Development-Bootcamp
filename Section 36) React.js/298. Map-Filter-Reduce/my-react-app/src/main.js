var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers);
//Filter - Create a new array by keeping the items that return true.

function greaterThan(num) {
  return num > 10;
}

const newNumbers2 = numbers.filter(greaterThan);
console.log(newNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.

const newNumbers3 = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(newNumbers3);
//Find - find the first item that matches from an array.

const newNumber4 = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumber4);

//FindIndex - find the index of the first item that matches.

const newNumber5 = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNumber5);
