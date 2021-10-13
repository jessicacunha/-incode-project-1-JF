var firstName = document.getElementById('InputFirstName')
var surname = document.getElementById('InputSurname')
var phone = document.getElementById('InputMobile')
var email = document.getElementById('InputEmail')
var message = document.getElementById('InputMessage')
var modal = document.getElementById("modal");
var sendButton = document.getElementById("send-btn");
var closeButton = document.getElementById("close-btn");

sendButton.onclick = function(event) { 
    typeof firstName.value == 'string' ? console.log("Name: " + firstName.value) : NaN ;    event.preventDefault()
    typeof surname.value == 'string' ? console.log("Surname: " + surname.value) : NaN;    event.preventDefault()
    email.value.includes('@') == true ? console.log("E-mail: " + email.value) : NaN;    event.preventDefault()
    typeof phone.value == 'number' ? console.log("Phone: " + phone.value) : NaN;    event.preventDefault()
    typeof message.value == 'string' ? console.log("Message: " + message.value) : NaN;    event.preventDefault()
    modal.style.display = "flex";
}

closeButton.onclick = function() { 
    modal.style.display = "none";
}
window.onclick = function(event) { 
if (event.target == modal) {
    modal.style.display = "none";
}
}