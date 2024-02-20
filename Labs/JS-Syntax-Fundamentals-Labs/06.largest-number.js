function solve(num1, num2, num3) {
    let result;

    if (num1 > num2) {
        if (num1 > num3) {
            result = num1;
        } else {
            result = num3;
        }
    } else {
        if (num2 > num3) {
            result = num2;
        } else {
            result = num3;
        }
    }

    console.log(`The largest number is ${result}.`);
}

solve(5, -3, 16);