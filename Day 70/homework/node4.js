// for loops

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Sum of numbers from 1 to 100: ${sum}`);

for (let i = 5; i <= 50; i += 5) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}
console.log(`Factorial of 5 is ${factorial}`);

let array = [1, 2, 3, 4, 5];
let arraySum = 0;
for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
}
console.log(`Sum of the array: ${arraySum}`);

let numbers = [10, 5, 8, 20, 2];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(`Largest number in the array: ${largest}`);

let str = "Hello World";
let vowels = "aeiouAEIOU";
let vowelCount = 0;
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelCount++;
    }
}
console.log(`Number of vowels in the string: ${vowelCount}`);

let numbersArray = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i];
}
let average = total / numbersArray.length;
console.log(`Average of the array: ${average}`);
