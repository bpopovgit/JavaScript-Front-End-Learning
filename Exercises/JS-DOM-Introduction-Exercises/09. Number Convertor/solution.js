function solve() {
    const inputNumberElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    // const selectMenuFromElement = document.getElementById('selectMenuFrom');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const convertButtonElement = document.querySelector('button');


    // Populate select Menu To with options

    // Using innerHTML (NOT RECOMMENDED!)
    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';
    selectMenuToElement.appendChild(hexadecimalOptionElement);

    const convertors = {
        binary: convertDecimalToBinary,
        hexadecimal: convertDecimalToHex,

    };

    convertButtonElement.addEventListener('click', () => {
        const numberValue = Number(inputNumberElement.value);

        resultElement.value = convertors[selectMenuToElement.value](numberValue)
    });

    

    function convertDecimalToBinary(number) {
        const result = [];
        while (number > 0) {
            result.push(number % 2)
            number = Math.trunc(number / 2);
        }

        return result.reverse().join('');
    }

    function convertDecimalToHex(number = 10) {
        const digitMapping = new Map([
            [0, '0'],
            [1, '1'],
            [2, '2'],
            [3, '3'],
            [4, '4'],
            [5, '5'],
            [6, '6'],
            [7, '7'],
            [8, '8'],
            [9, '9'],
            [10, 'A'],
            [11, 'B'],
            [12, 'C'],
            [13, 'D'],
            [14, 'E'],
            [15, 'F']
        ])

        const result = [];

        while (number > 0) {
            result.push(digitMapping.get(number % 16));
            number = Math.trunc(number / 16);
        }

        return result.reverse().join('');
    }

}