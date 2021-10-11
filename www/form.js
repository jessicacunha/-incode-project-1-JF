
function FormFunction(){

    var name = document.getElementById("InputFirstName").value;
    var surname = document.getElementById("InputSurname").value;
    var phone = document.getElementById("InputMobile").value;
    var checkEmail = document.getElementById("InputEmail").value;
    var message = document.getElementById("InputMessage").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";



    console.log("Name: " + name);
    console.log("Surname: " + surname)
    console.log("E-mail: " + checkEmail);
    console.log("Phone: " + phone);
    console.log("Message: " + message);
    return true;
}