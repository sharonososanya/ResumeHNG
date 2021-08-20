console.log("connected");

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

const toggleNav = () => {
  nav.classList.toggle("show");
};

hamburger.addEventListener("click", toggleNav);
