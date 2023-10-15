function onSubmit(token) {
    // Obtain the button and container elements
    var button = document.querySelector(".g-recaptcha");
    var container = button.parentElement;
  
    // Create a new paragraph element to display the email
    var emailParagraph = document.createElement("p");
    emailParagraph.textContent = "isaiah.stock@gmail.com";
  
    // Append the email paragraph to the container and remove the button
    container.appendChild(emailParagraph);
    container.removeChild(button);
  }
  