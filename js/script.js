document.addEventListener("DOMContentLoaded", function () {
  // 🔹 Mobile navigation toggle
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // 🔹 Dropdown behavior for mobile
  const dropdown = document.querySelector('.dropdown');

  if (dropdown) {
    dropdown.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('open');
      }
    });
  }

  // 🔹 Typing effect
  const typedEl = document.getElementById("typed");

  if (typedEl) {
    const messages = [
    "Software Development.",
    "Business Computing Graduate.",
    "Developer.",
	  "Project Management.",
	  "UI/UX Design.",
    "Problem Solver."
    ];

    let i = 0;
    let j = 0;
    let current = "";
    let isDeleting = false;

    function type() {
      if (!typedEl) return;

      if (!isDeleting && j <= messages[i].length) {
        current = messages[i].substring(0, j++);
      } else if (isDeleting && j > 0) {
        current = messages[i].substring(0, j--);
      }

      typedEl.textContent = current;

      if (!isDeleting && j === messages[i].length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % messages.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 50 : 100);
      }
    }

    type();
  }

  // 🔹 Hamburger menu toggle (if used elsewhere)
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  }

  // 🔹 Lightbox for Children's Spelling App
  const mainImage = document.getElementById("mainProjectImg");
  const lightbox = document.getElementById("lightbox");

  if (mainImage && lightbox) {
    mainImage.addEventListener("click", () => {
      lightbox.style.display = "flex";
    });

    lightbox.addEventListener("click", (event) => {
      if (
        event.target.id === "lightbox" ||
        event.target.classList.contains("close-btn")
      ) {
        lightbox.style.display = "none";
      }
    });
  }

  // 🔹 Lightbox for WeatherAPI Project
  const weatherImg = document.getElementById("weatherProjectImg");
  const weatherLightbox = document.getElementById("lightbox-weather");

  if (weatherImg && weatherLightbox) {
    weatherImg.addEventListener("click", () => {
      weatherLightbox.style.display = "flex";
    });

    weatherLightbox.addEventListener("click", (event) => {
      if (
        event.target.id === "lightbox-weather" ||
        event.target.classList.contains("close-btn")
      ) {
        weatherLightbox.style.display = "none";
      }
    });
  }

  // 🔹 Modal functionality (CV modal)
  const modal = document.getElementById("cvModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtns = document.querySelectorAll(".close-btn, #closeModalBtn2");

  if (modal && openModalBtn) {
    openModalBtn.onclick = () => {
      modal.style.display = "block";
    };

    closeModalBtns.forEach(btn => {
      btn.onclick = () => {
        modal.style.display = "none";
      };
    });

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
});

