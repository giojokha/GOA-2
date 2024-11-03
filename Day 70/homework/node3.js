// while loops

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

let n = 5; 
let factorial = 1;
let k = 1;
while (k <= n) {
    factorial *= k;
    k++;
}
console.log(`Factorial of ${n} is ${factorial}`);

let limit = 10;
let fib1 = 0, fib2 = 1;
let fibSequence = [];
while (fib1 <= limit) {
    fibSequence.push(fib1);
    let next = fib1 + fib2;
    fib1 = fib2;
    fib2 = next;
}
console.log(`Fibonacci sequence up to ${limit}: ${fibSequence}`);

n = 124; 
let reversed = 0;
while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
}
console.log(`Reversed number: ${reversed}`);

n = 12412;
let largestDigit = 0;
let originalNum = n;
while (n > 0) {
    let digit = n % 10;
    if (digit > largestDigit) {
        largestDigit = digit;
    }
    n = Math.floor(n / 10);
}
console.log(`Largest digit in ${originalNum} is ${largestDigit}`);

n = 121;
let temp = n;
let reversedNum = 0;
while (temp > 0) {
    reversedNum = reversedNum * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
}
console.log(`${n} is ${n === reversedNum ? '' : 'not '}a palindrome`);

n = 12341;
let sumOfDigits = 0;
temp = n;
while (temp > 0) {
    sumOfDigits += temp % 10;
    temp = Math.floor(temp / 10);
}
console.log(`Sum of digits of ${n} is ${sumOfDigits}`);

n = 29; 
let isPrime = true;
let divisor = 2;
while (divisor <= Math.sqrt(n)) {
    if (n % divisor === 0) {
        isPrime = false;
        break;
    }
    divisor++;
}
console.log(`${n} is ${isPrime ? '' : 'not '}a prime number`);

let str = "hello";
let reversedStr = "";
let index = str.length - 1;
while (index >= 0) {
    reversedStr += str[index];
    index--;
}
console.log(`Reversed string: ${reversedStr}`);

