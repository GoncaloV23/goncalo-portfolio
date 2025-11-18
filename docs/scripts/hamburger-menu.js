// mobile-menu.js

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileMenuInner = document.querySelector(".mobile-menu-inner");
const mobileClose = document.querySelector(".mobile-close");

function toggleMenu() {
  if (!mobileNav) return;

  const isOpen = mobileNav.classList.toggle("open");
  mobileNav.setAttribute("aria-hidden", String(!isOpen));

  if (isOpen) {
    document.body.classList.add("no-scroll");
    document.body.addEventListener("touchmove", preventScroll, { passive: false });
  } else {
    document.body.classList.remove("no-scroll");
    document.body.removeEventListener("touchmove", preventScroll);
  }
}

function preventScroll(e) {
  e.preventDefault();
}

// Only use 'click', it's simpler and works on desktop + mobile
if (hamburger && mobileNav && mobileMenuInner) {
  // Open menu
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu
  if (mobileClose) {
    mobileClose.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Close menu when clicking a link
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu();
    });
  });

  // Close menu if clicking outside
  document.addEventListener("click", (e) => {
    if (mobileNav.classList.contains("open") && !mobileMenuInner.contains(e.target) && !hamburger.contains(e.target)) {
      toggleMenu();
    }
  });
}
