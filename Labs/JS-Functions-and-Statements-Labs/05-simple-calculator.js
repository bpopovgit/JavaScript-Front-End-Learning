function solve(num1, num2, operator) {
    switch (operator) {
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
    }
}

console.log(solve(5,
    5,
    'multiply'
    ));