function solve(num1) {
    let multiplication;
    for(let i = 1; i <= 10; i++) {
        multiplication = num1 * i;
        console.log(`${num1} X ${i} = ${multiplication}`)
    }
}

solve(5);
solve(2);