// Get the modal element
var emailPopup = document.getElementById("email-modal");

// Get the <span> element that closes the modal
var closeEmailPopup = document.getElementsByClassName("close-email-modal")[0];

// Open the modal when a specific event occurs (e.g., button click)
function openEmailModal() {
  emailPopup.style.display = "flex";
}

// Close the modal when the user clicks or taps on the <span> element
closeEmailPopup.addEventListener("click", closeModal);
closeEmailPopup.addEventListener("touchend", closeModal);

// Close the modal when the user clicks or taps anywhere outside the modal
window.addEventListener("click", outsideClick);
window.addEventListener("touchend", outsideClick);

function closeModal() {
  emailPopup.style.display = "none";
}

function outsideClick(event) {
  if (event.target == emailPopup) {
    emailPopup.style.display = "none";
  }
}