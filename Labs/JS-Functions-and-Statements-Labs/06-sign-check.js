function solve(numOne, numtwo, numThree) {
    const multiply = (a, b) => a * b;
    
    if (multiply(multiply(numOne, numtwo), numThree) >= 0) {
        console.log('Positive');
    } else {
        console.log('Negative')
    }
}

console.log(solve( 5,
    12,
   -15
   ));
console.log(solve());
console.log(solve());
console.log(solve());