// creating arrays and modifying them

let numbers = Array.from({ length: 10 }, (_, i) => i + 1);

numbers.push(11);

numbers.unshift(0);

numbers.pop();

numbers.shift();

let length = numbers.length;


let thirdElement = numbers[2];

numbers.forEach(num => console.log(num));

let doubled = numbers.map(num => num * 2);

let reversed = [...numbers].reverse();