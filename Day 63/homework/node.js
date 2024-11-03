function submitForm() {
    let form = document.getElementById('bankForm');

    let accountHolder = document.getElementById('accountHolder').value;
    let accountNumber = document.getElementById('accountNumber').value;
    let balance = document.getElementById('balance').value;

    console.log('Account Holder Name: ' + accountHolder);
    console.log('Account Number: ' + accountNumber);
    console.log('Initial Balance: ' + balance);

    form.reset();
}