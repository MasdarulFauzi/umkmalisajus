// Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });

      const hamburger = document.getElementById('hamburger');
      const menu = document.getElementById('menu');

      hamburger.addEventListener('click', () => {
menu.classList.toggle('active');
hamburger.classList.toggle('active');
});('click', () => {
menu.classList.toggle('active');
});