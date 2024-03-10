function solve(string, repeatCount) {
    let result = '';
    for (let i = 1; i <= repeatCount; i++) {
        result += string;
    }

    return result;
}

console.log(solve("abc", 3));
console.log(solve("String", 2));