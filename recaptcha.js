function onSubmit(token) {
    revealEmail();
}

function revealEmail() {
    var emailLink = document.createElement("a");
    var user = "isaiah.stock@gmail.com";
    var domain = "isaiahstock.com";
    
    emailLink.href = "mailto:" + user + "@" + domain;
    emailLink.textContent = "Email me";
    document.body.appendChild(emailLink);
}
