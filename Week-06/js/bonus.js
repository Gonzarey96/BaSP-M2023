window.onload = function(){
    function validateForm() {
        var nameInput = document.getElementById("name");
        var surnameInput = document.getElementById("surname");
        var emailInput = document.getElementById("email");
        var reasonInputs = document.getElementsByName("reason-for-contact");
        var messageInput = document.getElementById("message");
        var errors = [];
      
        if (nameInput.value === "") {
          errors.push("Name is required");
        }
      
        if (surnameInput.value === "") {
          errors.push("Surname is required");
        }
      
        if (emailInput.value === "") {
          errors.push("Email is required");
        } else {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailInput.value)) {
            errors.push("Invalid email address");
          }
        }
      
        var reasonSelected = false;
        for (var i = 0; i < reasonInputs.length; i++) {
          if (reasonInputs[i].checked) {
            reasonSelected = true;
            break;
          }
        }
        if (!reasonSelected) {
          errors.push("Please select a reason for contact");
        }
      
        if (messageInput.value === "") {
          errors.push("Message is required");
        }
      
        if (errors.length > 0) {
          var errorText = "";
          for (var j = 0; j < errors.length; j++) {
            errorText += errors[j] + "\n";
          }
          alert(errorText);
          return false;
        } else {
          alert("Form submitted successfully");
          return true;
        }
      }
      
      var nameInput = document.getElementById("name");
      var surnameInput = document.getElementById("surname");
      var emailInput = document.getElementById("email");
      var reasonInputs = document.getElementsByName("reason-for-contact");
      var messageInput = document.getElementById("message");
      
      nameInput.addEventListener("blur", function () {
        if (nameInput.value === "") {
          nameInput.classList.add("error");
          nameInput.nextElementSibling.textContent = "Name is required";
        }
      });
      
      surnameInput.addEventListener("blur", function () {
        if (surnameInput.value === "") {
          surnameInput.classList.add("error");
          surnameInput.nextElementSibling.textContent = "Surname is required";
        }
      });
      
      emailInput.addEventListener("blur", function () {
        if (emailInput.value === "") {
          emailInput.classList.add("error");
          emailInput.nextElementSibling.textContent = "Email is required";
        } else {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add("error");
            emailInput.nextElementSibling.textContent = "Invalid email address";
          }
        }
      });
      
      for (var i = 0; i < reasonInputs.length; i++) {
        reasonInputs[i].addEventListener("focus", function () {
          this.nextElementSibling.classList.remove("error");
        });
      }
      
      messageInput.addEventListener("blur", function () {
        if (messageInput.value === "") {
          messageInput.classList.add("error");
          messageInput.nextElementSibling.textContent = "Message is required";
        }
      });
      
      var form = document.getElementById("contact-form");
      form.addEventListener("submit", function (event) {
        if (!validateForm()) {
          event.preventDefault();
        }
      });
}