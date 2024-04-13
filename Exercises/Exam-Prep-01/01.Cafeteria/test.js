function solve(input) {
    let message = input.shift(); // Remove the first element and use it as the initial encoded message

    function takeEven(message) {
        return message.split('').filter((_, index) => index % 2 === 0).join('');
    }

    function changeAll(message, substring, replacement) {
        return message.split(substring).join(replacement);
    }

    function reverseSubstring(message, substring) {
        const index = message.indexOf(substring);
        if (index === -1) {
            console.log("error");
            return message; // Return original message if substring not found
        }

        const before = message.substring(0, index);
        const after = message.substring(index + substring.length);
        const reversed = substring.split('').reverse().join('');
        return before + after + reversed;
    }

    while (input.length > 0) {
        const command = input.shift();

        if (command === "Buy") {
            console.log(`The cryptocurrency is: ${message}`);
            break;
        }

        const parts = command.split('?');
        const commandType = parts[0];

        if (commandType === "TakeEven") {
            message = takeEven(message);
            console.log(message);
        } else if (commandType === "ChangeAll") {
            message = changeAll(message, parts[1], parts[2]);
            console.log(message);
        } else if (commandType === "Reverse") {
            const newMessage = reverseSubstring(message, parts[1]);
            if (newMessage !== message) { // Only print if changes were made
                message = newMessage;
                console.log(message);
            }
        }
    }
}

// Example of calling the solve function with an input array
solve([
    "z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"
]);
