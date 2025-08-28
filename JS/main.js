// ===== Progress Bar Animation in Skills Section =====
const bars = document.querySelectorAll('.progress-bar');

function animateBars() {
  const triggerBottom = window.innerHeight / 1.1;

  bars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < triggerBottom && bar.style.width === '0%') {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
      bar.textContent = width;
    }
  });
}

// ===== Scroll Events (Nav Highlight + Navbar Shadow + Progress Bar + Skills Animation) =====
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-link");
  let top = window.scrollY;

  // === Highlight Active Nav Link ===
  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector(".nav-link[href*=" + id + "]").classList.add("active");
      });
    }
  });

  // === Navbar Shadow Effect ===
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // === Page Scroll Progress Bar ===
  const progress = document.getElementById("progress-bar");
  if (progress) {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = scrolled + "%";
  }

  // === Animate Skill Bars ===
  animateBars();
});

// ===== Trigger animation when page loads =====
window.addEventListener("load", animateBars);
