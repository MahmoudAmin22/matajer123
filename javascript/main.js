 
 document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // navbar
      let nav = document.querySelector("nav");
      let toggleMenu = document.querySelectorAll(".toggle-menu");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
          nav.style.top = "0";
          nav.style.transition = "0.5s";
          nav.style.boxShadow =
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
          nav.style.background = "indigo";

          toggleMenu.forEach((link) => {
            link.style.color = "white";
          });
        } else {
          nav.style.transition = "0.5s";
          nav.style.boxShadow = "none";
          nav.style.background = "none";
          toggleMenu.forEach((link) => {
            link.style.color = "gray";
          });
        }
      });

      // dark mode
      const toggleBtn = document.getElementById("toggle-theme");
      const body = document.body;
      toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
      });
    });

  // footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

  // slider
  const track = document.querySelector('.slider-track');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  const slideWidth = 320;
  let position = 0;

  function getMaxScroll() {
    return track.scrollWidth - track.clientWidth;
  }

  nextBtn.addEventListener('click', () => {
    const maxScroll = getMaxScroll();
    if (Math.abs(position) < maxScroll) {
      position -= slideWidth;
    } else {
      position = 0;
    }
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    if (position < 0) {
      position += slideWidth;
    }
    updateSlider();
  });

  function updateSlider() {
    track.style.transform = `translateX(${position}px)`;
  }

  setInterval(() => {
    const maxScroll = getMaxScroll();
    if (Math.abs(position) < maxScroll) {
      position -= slideWidth;
    } else {
      position = 0;
    }
    updateSlider();
  }, 4000);
});
