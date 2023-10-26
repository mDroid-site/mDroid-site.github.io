// Get the modal element
var discordPopup = document.getElementById("discord-modal");

// Get the <span> element that closes the modal
var closeDiscordPopup = document.getElementsByClassName("close-discord-modal")[0];

// Open the modal when a specific event occurs (e.g., button click)
function openDiscordModal() {
  discordPopup.style.display = "flex";
}

// Close the modal when the user clicks or taps on the <span> element
closeDiscordPopup.addEventListener("click", closeModal);
closeDiscordPopup.addEventListener("touchend", closeModal);

// Close the modal when the user clicks or taps anywhere outside the modal
window.addEventListener("click", outsideClick);
window.addEventListener("touchend", outsideClick);

function closeModal() {
  discordPopup.style.display = "none";
}

function outsideClick(event) {
  if (event.target == discordPopup) {
    discordPopup.style.display = "none";
  }
}