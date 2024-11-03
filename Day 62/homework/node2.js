function welcomeMessage() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;

    if (firstName && lastName) {
        alert('Welcome ' + firstName + ' ' + lastName);
    } else {
        alert('Please Enter Your First and Last Name');
    }
}
