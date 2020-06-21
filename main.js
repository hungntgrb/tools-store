const navBar = document.querySelector("#nav");
const toggleBtn = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

const explore = document.querySelector(".explore");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const navBarHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > navBarHeight) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});
