
      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('open');
      });

      // Fermer le menu quand on clique sur un lien
      document.querySelectorAll('.button-in-top').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('open');
        });
      });

      const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.08
  });

  document.querySelectorAll('.apparition').forEach(el => {
    observer.observe(el);
  });
