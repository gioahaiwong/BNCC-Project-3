function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const navbarLinks = document.querySelectorAll(".navbar-link");
navbarLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

const button = document.querySelector(".button-fun");

button.addEventListener("click", () => {
  button.classList.add("animate");

  setTimeout(() => {
    button.classList.remove("animate");
  }, 1000);
});
