'use strict'
let input;
const numbers = [];
let total = 0;

while(true) {
    input = prompt('введите число');
    if (input === null) {
        if (numbers.length !== 0) {
            for (const number of numbers) {
                total += number;
            }
            console.log(numbers);
            console.log(total);
        } else {
            console.log('empty');
        }
        break;
    }    
    input = Number(input);
    if (Number.isNaN(input)) {
        alert(`Было введено не число, попробуйте еще раз`)
        continue;
    }
    numbers.push(input)
} 