function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

const yesButton = document.getElementById("yes");
yesButton.addEventListener("click", function () {
  // Replace with your actual WhatsApp number and message
  const phoneNumber = "9561473329"; // Your WhatsApp number
  const message = "Yes I love You";
  window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
});
