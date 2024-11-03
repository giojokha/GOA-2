// Conditional Statements


// first one

function checkNumber(num) {
    if (num > 0) {
        console.log('The number is positive.');
    } else if (num < 0) {
        console.log('The number is negative.');
    } else {
        console.log('The number is zero.');
    }
}

checkNumber(5);  
checkNumber(-3);  
checkNumber(0);   


// second one

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log('The number is even.');
    } else {
        console.log('The number is odd.');
    }
}

checkEvenOdd(4);  
checkEvenOdd(7); 

// third one

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log('The year is a leap year.');
    } else {
        console.log('The year is not a leap year.');
    }
}

isLeapYear(2020);
isLeapYear(2021);

// fourth one

function findLarger(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(findLarger(10, 20));
console.log(findLarger(30, 25)); 

// fifth one

function findSmallest(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

console.log(findSmallest(10, 20, 5)); 
console.log(findSmallest(30, 25, 35));

// sixth one

function isEmptyString(str) {
    if (str.length === 0) {
        console.log('The string is empty.');
    } else {
        console.log('The string is not empty.');
    }
}

isEmptyString("");   
isEmptyString("Text");

// Seventh One

function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
        console.log('The string is a palindrome.');
    } else {
        console.log('The string is not a palindrome.');
    }
}

isPalindrome("A man a plan a canal Panama");
isPalindrome("Hello World");    

// eigth one

function numericToLetterGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(numericToLetterGrade(85));
console.log(numericToLetterGrade(92));

// ninth one

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(11)); 
console.log(isPrime(15)); 

// tenth one

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));   
console.log(celsiusToFahrenheit(25));  



