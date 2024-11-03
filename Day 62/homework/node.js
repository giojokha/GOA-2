function calculate() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);

    if (isNaN(num1) || isNaN(num2)) {
        console.log('Please Enter Only Valid Numbers');
        return;
    }

    let sum = num1 + num2;
    let difference = num1 - num2;
    let multiplication = num1 * num2;
    let quotient = num2 !== 0 ? num1 / num2 : 'Infinity';

    console.log('Sum: ' + sum);
    console.log('Difference: ' + difference);
    console.log('Product: ' + product);
    console.log('Quotient: ' + quotient);
}