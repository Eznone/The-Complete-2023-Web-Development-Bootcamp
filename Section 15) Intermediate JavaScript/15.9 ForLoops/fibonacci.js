function fibonacciGenerator(num){
    var arr = [];
    var newNum;
    for (var i = 0; i < num; i++){
        if (i === 0 || i === 1){
            arr.push(i);
        } 
        else {
            newNum = arr[i - 1] + arr[i - 2];
            arr.push(newNum);
        }
    }
    return (arr);
}

console.log(fibonacciGenerator(3));