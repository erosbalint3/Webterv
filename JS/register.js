let form = document.getElementById("registerForm");
const usernameEl = document.querySelector('#userName');
const emailEl = document.querySelector('#emailAddress');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#passwordAgain');
const userNameError = document.querySelector('#userNameError');
const emailAddresError = document.querySelector('#emailAddressError');
const passwordError = document.querySelector('#passwordError');
const passwordAgainError = document.querySelector('#passwordAgainError');
const isRequired = value => value !== '';
const isBetween = (length, min, max) => !(length < min || length > max);
const isEmailValid = (email) => {
    const re = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/i;
    return re.test(email);
};
const isPasswordSecure = (password) => {
    const re = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@%&#:;,?~_]).{8,32}/i;
    return re.test(password);
};
const showError = (input, errorTag, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    errorTag.textContent = message;
};
const showSuccess = (input, error) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    error.textContent = '';
}
const checkUsername = () => {

    let valid = false;
    const min = 5,
        max = 25;
    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, userNameError,'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, userNameError,`Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl, userNameError);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, emailAddresError,'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, emailAddresError,'Email is not valid.')
    } else {
        showSuccess(emailEl, emailAddresError);
        valid = true;
    }
    return valid;
}

const checkPassword = () => {

    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, passwordError, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, passwordError,'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl, passwordError);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, passwordAgainError,'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, passwordAgainError,'Confirm password does not match');
    } else {
        showSuccess(confirmPasswordEl, passwordAgainError);
        valid = true;
    }

    return valid;
};

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'userName':
            checkUsername();
            break;
        case 'emailAddress':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'passwordAgain':
            checkConfirmPassword();
            break;
    }
});