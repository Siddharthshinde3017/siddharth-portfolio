// Inject progress bar into all pages
document.addEventListener("DOMContentLoaded", function() {
  if (!document.getElementById("progress-bar")) {
    const progressBar = document.createElement("div");
    progressBar.id = "progress-bar";
    document.body.prepend(progressBar);
  }
});

// Navbar shadow + Progress bar scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Progress bar scroll
  const progress = document.getElementById("progress-bar");
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progress.style.width = scrolled + "%";
});

// Gallery modal
const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');

// Select all gallery images
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;         // Set modal image
    modalTitle.textContent = img.alt; // Set modal title
    imageModal.show();
  });
});

// EmailJS integration
(function() {
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
  .then(function() {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
  }, function(error) {
      alert("❌ Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
  });
});
