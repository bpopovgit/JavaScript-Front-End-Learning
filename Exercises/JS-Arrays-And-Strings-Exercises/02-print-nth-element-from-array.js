function solve(array, step) {
    let outputArray = [];
    for (let i = 0; i < array.length; i += step) {
        outputArray.push(array[i]);
    }

    return outputArray;

}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
