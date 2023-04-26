window.onload = function(){
    var loginForm = document.querySelector('.form-login');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    function validatePassword(password) {
      var hasUpperCase = false;
      var hasLowerCase = false;
      var hasNumber = false;
      for (var i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
          hasUpperCase = true;
        } else if (password[i] >= 'a' && password[i] <= 'z') {
          hasLowerCase = true;
        } else if (password[i] >= '0' && password[i] <= '9') {
          hasNumber = true;
        }
      }
      return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber;
    }
    function validateInputs() {
      var isValid = true;
    
      if (!validateEmail(usernameInput.value)) {
        isValid = false;
        setError(usernameInput, 'Invalid Email');
      } else {
        clearError(usernameInput);
      }
      if (!validatePassword(passwordInput.value)) {
        isValid = false;
        setError(passwordInput, 'Invalid Password');
      } else {
        clearError(passwordInput);
      }
      return isValid;
    }
    function setError(input, message) {
      var parent = input.parentElement;
      var error = parent.querySelector('.error-message');
      if (!error) {
        error = document.createElement('div');
        error.classList.add('error-message');
        parent.appendChild(error);
      }
      error.innerText = message;
    }
    function clearError(input) {
      var parent = input.parentElement;
      var error = parent.querySelector('.error-message');
      if (error) {
        parent.removeChild(error);
      }
    }
    usernameInput.addEventListener('blur', function() {
      if (!validateEmail(usernameInput.value)) {
        setError(usernameInput, 'Invalid Email');
      } else {
        clearError(usernameInput);
      }
    });
    passwordInput.addEventListener('blur', function() {
      if (!validatePassword(passwordInput.value)) {
        setError(passwordInput, 'Invalid Password');
      } else {
        clearError(passwordInput);
      }
    });
    usernameInput.addEventListener('focus', function() {
      clearError(usernameInput);
    });
    passwordInput.addEventListener('focus', function() {
      clearError(passwordInput);
    });
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateInputs()) {
        alert('Valid Form\n\nEmail: ' + usernameInput.value + '\nContraseña: ' + passwordInput.value);
      } else {
        alert('Mail or Password invalid');
      }
    });
    }
    