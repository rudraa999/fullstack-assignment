// Assignment 3: JavaScript Form Validation

function validateForm(event) {
  event.preventDefault();

  // 1. Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();

  // 2. Get error elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById('passwordError');
  const successMsg = document.getElementById('successMsg');

  // Reset previous error messages
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';
  successMsg.style.display = 'none';

  let isValid = true;

  // Validate Name (Required, at least 3 letters)
  if (name === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  } else if (name.length < 3) {
    nameError.textContent = 'Name must be at least 3 characters long.';
    isValid = false;
  }

  // Validate Email (Required, basic regex check)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email address.';
    isValid = false;
  }

  // Validate Phone (Required, exactly 10 numeric digits)
  const phonePattern = /^[0-9]{10}$/;
  if (phone === '') {
    phoneError.textContent = 'Phone number is required.';
    isValid = false;
  } else if (!phonePattern.test(phone)) {
    phoneError.textContent = 'Phone number must be exactly 10 digits.';
    isValid = false;
  }

  // Validate Password (Required, at least 6 characters)
  if (password === '') {
    passwordError.textContent = 'Password is required.';
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  // If all inputs are valid
  if (isValid) {
    successMsg.textContent = 'Registration Successful!';
    successMsg.style.display = 'block';

    // Clear form fields
    document.getElementById('regForm').reset();
  }

  return false;
}
