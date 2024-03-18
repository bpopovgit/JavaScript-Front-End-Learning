function solve(numOne, numtwo, numThree) {
    if (numOne < numtwo && numOne <numThree) {
        console.log(numOne);
    } else if (numtwo < numOne && numtwo < numThree) {
        console.log(numtwo)
    } else {
        console.log(numThree)
    }
}

solve(2,
    5,
    3
    );
solve(600,
    342,
    123
    );