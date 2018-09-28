var loginModal = document.getElementById('yeetLogin');
var signupModal = document.getElementById('yeetSignup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal){
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
}

