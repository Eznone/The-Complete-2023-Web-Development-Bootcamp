function whosPaying(names){
    var pos = (Math.floor(Math.random() * names.length));
    return (names[pos] + " is buying lunch today");
}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));