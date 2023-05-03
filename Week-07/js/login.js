window.onload = function(){
    var loginForm = document.querySelector('.form-login');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    
    function validateEmail(email) {
      var emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
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
    function showModal(message) {
      var modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';

      var content = document.createElement('div');
      content.style.backgroundColor = '#fff';
      content.style.padding = '20px';
      content.style.borderRadius = '5px';
      content.textContent = message;
      modal.appendChild(content);
    
      modal.addEventListener('click', function() {
        document.body.removeChild(modal);
      });
    
      document.body.appendChild(modal);
    }
    
    loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateInputs()) {
    var emailValue = usernameInput.value;
    var passwordValue = passwordInput.value;
    
    var url = `https://api-rest-server.vercel.app/login?email=${emailValue}&password=${passwordValue}`;
    
    fetch(url)
    .then(function (resp){
    return resp.json();
    })
    .then(function (data) {
    if(!data.success){
    throw new Error('Unsuccessful login' + data.msg);
    }
    showModal('The request was successful:\n' + data.msg);
    showModal('Email: ' + usernameInput.value + '\nPassword: ' + passwordInput.value);
    })
    .catch(function (err) {
    showModal('The request could not be performed successfully:\n' + err);
    });
    } else {
    var usernameErrorMessage = usernameInput.parentElement.querySelector('.error-message');
    var passwordErrorMessage = passwordInput.parentElement.querySelector('.error-message');
    var errorMessage = 'Please correct the following errors:\n\n';
    if (usernameErrorMessage) {
    errorMessage += '- ' + usernameErrorMessage.innerText + '\n';
    }
    if (passwordErrorMessage) {
    errorMessage += '- ' + passwordErrorMessage.innerText + '\n';
    }
    showModal(errorMessage);
    }
    });
    }
    showModal('The request was successful:\n' + data.msg);
    showModal('Email: ' + usernameInput.value + '\nPassword: ' + passwordInput.value);
    showModal('The request could not be performed successfully:\n' + err);
    showModal(errorMessage);