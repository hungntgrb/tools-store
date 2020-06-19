const toggleBtn = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

const explore = document.querySelector(".explore");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
