function hasOnlyLetters(value) {
  for (var i = 0; i < value.length; i++) {
    var char = value.charCodeAt(i);
    if (!(char >= 65 && char <= 90) && !(char >= 97 && char <= 122)) {
      return false;
    }
  }
  return true;
}

function hasOnlyNumbers(value) {
  for (var i = 0; i < value.length; i++) {
    if (isNaN(parseInt(value[i]))) {
      return false;
    }
  }
  return true;
}

var validateForm = function(form) {
  var formElement = document.querySelector(form);
  var inputsValidations = [
    {
      inputForm : 'name',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Name is required';
          return false;
        }
        if(input.value && input.value.length <= 3) {
          this.errorMessage = 'Name must has more than 3 letters';
          return false;
        }
        if(input.value && !hasOnlyLetters(input.value)) {
          this.errorMessage = 'Name can contain only letters';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'lastname',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Last name is required';
          return false;
        }
        if(input.value && input.value.length <= 3) {
          this.errorMessage = 'Last name must has more than 3 letters';
          return false;
        }
        if(input.value && !hasOnlyLetters(input.value)) {
          this.errorMessage = 'Last name can contain only letters';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'dni',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'DNI is required';
          return false;
        }
        if(input.value && (input.value.length < 7) || (input.value.length > 8)) {
          this.errorMessage = 'DNI is not valid';
          return false;
        }
        if(input.value && !hasOnlyNumbers(input.value)) {
          this.errorMessage = 'DNI can only have numbers';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'date-born',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Date born is required';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'tel',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Telephone is required';
          return false;
        }
        if(input.value && input.value.length !== 10) {
          this.errorMessage = 'Telephone not valid';
          return false;
        }
        if(input.value && !hasOnlyNumbers(input.value)) {
          this.errorMessage = 'Telephone can only have numbers';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'direction',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Direction is required';
          return false;
        }
        if(input.value) {
          if(input.value.indexOf(' ') === -1) {
            this.errorMessage = 'Direction not valid';
            return false;
          }
          var gap = input.value.lastIndexOf(' ');
          var street = input.value.substring(0, gap);
          var number = input.value.substring(gap + 1);
          if(street.length < 5) {
            this.errorMessage = 'Direction street must have more than 5 letters.';
            return false;
          }
          if(number.length < 2 || number.length > 4 || !hasOnlyNumbers(number)) {
            this.errorMessage = 'Direction number not valid.';
            return false;
          }
        }
        return true;
      }
    },
    {
      inputForm : 'city',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'City is required';
          return false;
        }
        if(input.value) {
          var notAlphanumeric = false;
          for (var i = 0; i < input.value.length; i++) {
            var char = input.value.charCodeAt(i);
            if(!(char >= 65 && char <= 90) && !(char >= 97 && char <= 122) && !(char >= 48 && char <=57)) {
              notAlphanumeric = true;
            }
          }
          if(notAlphanumeric) {
            this.errorMessage = 'City can only contain alphanumeric caracters';
            return false;
          }
          if(input.value.length < 3) {
            this.errorMessage = 'City must have more than 3 letters';
            return false;
          }
        }
        return true;
      }
    },
    {
      inputForm : 'postal-code',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Postal code is required';
          return false;
        }
        if(input.value) {
          if(!hasOnlyNumbers(input.value)) {
            this.errorMessage = 'Postal code can only have numbers';
            return false;
          }
          if(input.value.length < 4 || input.value.length > 5) {
            this.errorMessage = 'Postal code can only have 4 or 5 numbers';
            return false;
          }
        }
        return true;
      }
    },
    {
      inputForm : 'email',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Email is required';
          return false;
        }
        var emailExpression = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');
        if(!emailExpression.test(input.value)) {
          this.errorMessage = 'Email invalid.';
          return false;
        }
        return true;
      }
    },
    {
      inputForm : 'password',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Password is required';
          return false;
        }
        if(input.value) {
          if(!(input.value.indexOf(' ') === -1)) {
            this.errorMessage = 'Password must not have empty spaces';
            return false;
          }
          if(input.value.length < 8) {
            this.errorMessage = 'Password must have 8 or more caracters';
            return false
          }
          var hasMayus = false;
          for (var i = 0; i < input.value.length; i++) {
            var char = input.value.charCodeAt(i);
            if((char >= 65 && char <= 90)) {
              hasMayus = true;
            }
          }
          if(!hasMayus) {
            this.errorMessage = 'Password must contain one uppercase letter';
            return false;
          }
          var numbers = 0;
          for (var i = 0; i < input.value.length; i++) {
            var char = input.value.charCodeAt(i);
            if((char >= 48 && char <= 57)) {
              numbers++
            }
          }
          if(numbers < 2) {
            this.errorMessage = 'Password must contain two or more numbers';
            return false;
          }
        }
        return true;
      }
    },
    {
      inputForm : 'repeated-password',
      errorMessage : '',
      isValid : function(input) {
        if(!input.value) {
          this.errorMessage = 'Repeated password is required';
          return false;
        }
        if(input.value) {
          var password = formElement.querySelector('#password').value;
          if(input.value !== password) {
            this.errorMessage = "Passwords not match";
            return false;
          }
        }
        return true;
      }
    }
  ];

  var validateFormGroup = function(formGroup) {
    var input = formGroup.querySelector('input');
    var label = formGroup.querySelector('label');
    var divErrors = formGroup.querySelector('div');

    input.addEventListener('focus', function(e) {
      input.classList.remove('input-error');
      label.classList.remove('label-error');
      divErrors.classList.add('is-hidden');
    });

    var formGroupError = false;
    for (var i = 0; i < inputsValidations.length; i++) {
      if(input.getAttribute('id') === inputsValidations[i].inputForm && !inputsValidations[i].isValid(input)) {
        input.classList.add('input-error');
        label.classList.add('label-error');
        divErrors.classList.remove('is-hidden');
        divErrors.innerText = inputsValidations[i].errorMessage;
        input.placeholder = 'Complete this field.';
        formGroupError = true;
      }
    }
    return !formGroupError;
  }

  Array.from(formElement.elements).forEach(function(element) {
    element.addEventListener('blur', function(e) {
      validateFormGroup(e.srcElement.parentElement);
    })
  });
  function changeDateFormat(date){
    var dateArray = date.split('-');

    var year=dateArray[0];
    var month=dateArray[1];
    var day=dateArray[2];

    dateArray= month + '/' + day + '/' + year;
    return dateArray;
}

function showModal(message) {
  var modalContainer = document.createElement('div');
  modalContainer.style.position = 'fixed';
  modalContainer.style.top = '0';
  modalContainer.style.left = '0';
  modalContainer.style.width = '100%';
  modalContainer.style.height = '100%';
  modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  
  var modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#fff';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '5px';
  modalContent.style.position = 'absolute';
  modalContent.style.top = '50%';
  modalContent.style.left = '50%';
  modalContent.style.transform = 'translate(-50%, -50%)';
  modalContent.style.whiteSpace = 'pre-line'


  var messageElement = document.createElement('p');
  messageElement.textContent = message;
  modalContent.appendChild(messageElement);

  modalContainer.appendChild(modalContent);

  modalContainer.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
      document.body.removeChild(modalContainer);
    }
  });

  document.body.appendChild(modalContainer);
}

formElement.addEventListener('submit', function(e) {
var fieldErrors = [];
var message = '';
e.preventDefault();
var allForms = Array.from(formElement.querySelectorAll('.form-group'));
for (var i = 0; i < allForms.length; i++) {
var error = validateFormGroup(allForms[i]);
if(!error) {
fieldErrors.push(allForms[i].querySelector('.form-input').getAttribute('id'));
}
}
if(fieldErrors.length !== 0) {
inputsValidations.forEach(function(input) {
for (var i = 0; i < fieldErrors.length; i++) {
if(input.inputForm === fieldErrors[i]) {
message += input.errorMessage + '\n';
}
}
})
showModal('Errors in: \n' + message);
} else {
for (var i = 0; i < allForms.length; i++) {
var input = allForms[i].querySelector('.form-input').value;
var label = allForms[i].querySelector('.form-label').textContent;
message += label.trim() + ': ' + input + '\n';
}
var nameValue = document.querySelector('#name').value;
var lastNameValue = document.querySelector('#lastname').value;
var dniValue = document.querySelector('#dni').value;
var dateBornValue = document.querySelector('#date-born').value;
var telValue = document.querySelector('#tel').value;
var directionValue = document.querySelector('#direction').value;
var cityValue = document.querySelector('#city').value;
var postalCodeValue = document.querySelector('#postal-code').value;
var emailValue = document.querySelector('#email').value;
var passwordValue = document.querySelector('#password').value;
var repeatedPasswordValue = document.querySelector('#repeated-password').value;

var url = 'https://api-rest-server.vercel.app/signup';
url += '?name=' + nameValue;
url += '&lastName=' + lastNameValue;
url += '&dni=' + dniValue;
url += '&dob=' + changeDateFormat(dateBornValue);
url += '&phone=' + telValue;
url += '&address=' + directionValue;
url += '&city=' + cityValue;
url += '&zip=' + postalCodeValue;
url += '&email=' + emailValue;
url += '&password=' + passwordValue;
url += '&confirmPassword=' + repeatedPasswordValue;

fetch(url)
.then(function(response) {
return response.json();
})
.then(function(data) {
showModal('The request was successful:\n' + JSON.stringify(data));
localStorage.setItem('name', nameValue);
localStorage.setItem('lastName', lastNameValue);
localStorage.setItem('dni', dniValue);
localStorage.setItem('dateBorn', dateBornValue);
localStorage.setItem('tel', telValue);
localStorage.setItem('direction', directionValue);
localStorage.setItem('city', cityValue);
localStorage.setItem('postalCode', postalCodeValue);
localStorage.setItem('email', emailValue);
localStorage.setItem('password', passwordValue);
})
.catch(function(error) {
showModal('Error:\n' + error);
});
showModal('Congrats: \n' + message);
}
});
}

validateForm('#sign-up-form');

window.onload = function() {
  document.querySelector('#name').value = localStorage.getItem('name');
  document.querySelector('#lastname').value = localStorage.getItem('lastName');
  document.querySelector('#dni').value = localStorage.getItem('dni');
  document.querySelector('#date-born').value = localStorage.getItem('dateBorn');
  document.querySelector('#tel').value = localStorage.getItem('tel');
  document.querySelector('#direction').value = localStorage.getItem('direction');
  document.querySelector('#city').value = localStorage.getItem('city');
  document.querySelector('#postal-code').value = localStorage.getItem('postalCode');
  document.querySelector('#email').value = localStorage.getItem('email');
  document.querySelector('#password').value = localStorage.getItem('password');
}
