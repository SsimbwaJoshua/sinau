"use strict";
const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
  menuBtn.classList.toggle("red-menu");
});
