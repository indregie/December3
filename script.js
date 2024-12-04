const goToGiftButton = document.getElementById("go-to-gift");
if (goToGiftButton) {
  goToGiftButton.addEventListener("click", () => {
    window.location.href = "gift.html";
  });
}

const goToIndexButton = document.getElementById("go-to-index");
if (goToIndexButton) {
  goToIndexButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
