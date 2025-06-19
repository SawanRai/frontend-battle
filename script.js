// =================== THEME TOGGLE ===================
const body = document.body;
const themeToggle = document.createElement("button");
themeToggle.innerText = "🌗 Toggle Theme";
themeToggle.id = "theme-toggle";
document.body.appendChild(themeToggle);

// Set initial theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
} else {
  body.classList.add("light-mode");
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});

// =================== SCROLL TO TOP ===================
const scrollBtn = document.createElement("button");
scrollBtn.id = "backToTop";
scrollBtn.innerText = "↑ Top";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =================== LOADER ===================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// =================== MOBILE NAVBAR ===================
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth"
    });
    navLinks.classList.remove("active");
  });
});

// =================== FADE-IN ON SCROLL ===================
const faders = document.querySelectorAll('.fade-in');

const fadeOnScroll = () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('load', fadeOnScroll);

// =================== TESTIMONIAL SLIDER ===================
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 4000);
