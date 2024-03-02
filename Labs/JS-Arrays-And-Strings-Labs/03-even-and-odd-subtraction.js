function solve(arr) {
    let evenSum = 0
    let oddSum = 0

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        if (arr[i] % 2 === 0) {
            evenSum += arr[i]
        } else {
            oddSum += arr[i]
        }
    }

    difference = evenSum - oddSum;
    console.log(difference);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);