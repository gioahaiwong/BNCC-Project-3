const button = document.querySelector(".button-fun");

button.addEventListener("click", () => {
  button.classList.add("animate");

  setTimeout(() => {
    button.classList.remove("animate");
  }, 1000);
});
