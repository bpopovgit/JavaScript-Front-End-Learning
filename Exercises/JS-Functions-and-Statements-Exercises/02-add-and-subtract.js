function solve(numOne, numTwo, numThree) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    const result = subtract(sum(numOne, numTwo), numThree);
    return result;

}

console.log(solve(23,
    6,
    10
    ));