// functions

function addNumbers(a, b) {
    return a + b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

function calculateCircleArea(radius) {
    return 2 * Math.PI * radius;
}

function isEven(number) {
    return number % 2 === 0;
}

function findMax(a, b) {
    return a > b ? a : b;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function generateNumbersArray(n) {
    const numbersArray = [];
    for (let i = 1; i <= n; i++) {
        numbersArray.push(i);
    }
    return numbersArray;
}

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function isPerfectNumber(num) {
    let sumOfDivisors = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sumOfDivisors += i;
        }
    }
    return sumOfDivisors === num;
}

console.log(addNumbers(3, 4)); 
console.log(multiplyNumbers(3, 4));
console.log(calculateRectangleArea(5, 10));
console.log(calculateCircleArea(5)); 
console.log(isEven(4)); 
console.log(findMax(10, 20)); 
console.log(reverseString("hello")); 
console.log(generateNumbersArray(5)); 
console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(isPerfectNumber(6)); 
console.log(isPerfectNumber(28)); 
console.log(isPerfectNumber(12));
