function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var passwordError = document.getElementById('passwordError');
    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var userNameError = document.getElementById('usernameError');

    // Reset errors
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    userNameError.textContent = '';
    passwordError.textContent = '';

    // Check for empty fields and display error messages
    document.getElementById('firstName').addEventListener('input', function() {
        if (this.value.trim() !== '') {
            document.getElementById('firstNameError').style.display = 'none';
        } else {
            document.getElementById('firstNameError').style.display = 'block';
        }
    });

    document.getElementById('lastName').addEventListener('input', function() {
        if (this.value.trim() !== '') {
            document.getElementById('lastNameError').style.display = 'none';
        } else {
            document.getElementById('lastNameError').style.display = 'block';
        }
    });

    document.getElementById('username').addEventListener('input', function() {
        if (this.value.trim() !== '') {
            document.getElementById('usernameError').style.display = 'none';
        } else {
            document.getElementById('usernameError').style.display = 'block';
        }
    });

    if (password === '') {
        passwordError.textContent = 'Password is required.';
    }

    // If any field is empty, return without submitting the form
    if (firstName === '' || lastName === '' || username === '' || password === '') {
        return;
    }

    // Password Check
    if (password.length < 8 || !/[A-Z]/.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain 1 capital letter.';
        return;
    }

    // Show success modal if all validations pass
    document.getElementById('successModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}
