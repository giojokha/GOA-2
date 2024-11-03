// Math

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInteger(1, 10));

function calculateSquareRoot(num) {
    return Math.sqrt(num);
}
console.log(calculateSquareRoot(16)); 

function roundToNearestInteger(num) {
    return Math.round(num);
}
console.log(roundToNearestInteger(4.6)); 

function roundDown(num) {
    return Math.floor(num);
}
console.log(roundDown(4.9)); 

function roundUp(num) {
    return Math.ceil(num);
}
console.log(roundUp(4.1)); 

function power(base, exponent) {
    return Math.pow(base, exponent);
}
console.log(power(2, 3)); 

function absoluteValue(num) {
    return Math.abs(num);
}
console.log(absoluteValue(-5)); 

function findLargestNumber(arr) {
    return Math.max(...arr);
}
console.log(findLargestNumber([10, 5, 8, 20, 2])); 

function getRandomBoolean() {
    return Math.random() < 0.5; 
}
console.log(getRandomBoolean()); 

function getRandomRGBColor() {
    const r = getRandomInteger(0, 255);
    const g = getRandomInteger(0, 255);
    const b = getRandomInteger(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(getRandomRGBColor()); 
