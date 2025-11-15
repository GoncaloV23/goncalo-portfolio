const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

function toggleMenu() {
  const isOpen = mobileNav.classList.toggle("open");
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
}

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", (e) => {
  if (mobileNav.classList.contains("open") && !mobileNav.contains(e.target)) {
    toggleMenu();
  }
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu());
});
