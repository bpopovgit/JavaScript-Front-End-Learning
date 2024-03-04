function solve(numbers, rotations) {
    for (let i = 0; i < rotations; i++) {
        let rotatedNumbers = [];
        let firstNumber = numbers[0];
        for (let j = 1; j < numbers.length; j++) {
            rotatedNumbers[j - 1] = numbers[j];
        }

        rotatedNumbers[rotatedNumbers.length] = firstNumber;
        numbers = rotatedNumbers;
    }

    console.log(numbers.join(' '));
}

solve([51, 47, 32, 61, 21], 2);