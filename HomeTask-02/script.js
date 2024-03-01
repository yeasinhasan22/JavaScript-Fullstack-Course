function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var passwordError = document.getElementById('passwordError');

    // if fields are empty
    if (firstName === '' || lastName === '' || username === '' || password === '') {
        alert('All fields are required!');
        return;
    }

    // password Check
    if (password.length < 8 || !/[A-Z]/.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain 1 capital letter.';
        return;
    }

    // alert('Form submitted successfully!');
    var modalFirstName = document.getElementById('modalFirstName');
    var modalLastName = document.getElementById('modalLastName');
    var modalUserName = document.getElementById('modalUserName');

    modalFirstName.textContent = firstName;
    modalLastName.textContent = lastName;
    modalUserName.textContent = username;

    // If all validations pass, show the success modal
    document.getElementById('successModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';

}