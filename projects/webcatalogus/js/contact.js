console.log('Main JS loaded');

const emailInputField = document.querySelector(".emailInput");
const usernameInputField = document.querySelector(".nameInput");
const messageInputField = document.querySelector(".messageInput")

emailInputField.addEventListener("click", function incorrectInput(){
    if(emailInputField.value.contains("@")){
        emailInputField.classList.add("alert-success")
    }
})

