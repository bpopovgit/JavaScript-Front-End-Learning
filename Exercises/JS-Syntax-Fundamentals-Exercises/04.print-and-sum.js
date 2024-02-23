function solve(num1, num2) {
    numbers = ''
    numbersSum = 0;
    for(let i = num1; i <= num2; i++) {
        numbers += i + ' '
        numbersSum += i;
    }
    console.log(numbers.trim());
    console.log(`Sum: ${numbersSum}`);
}

solve(5, 10);
solve(0, 26);