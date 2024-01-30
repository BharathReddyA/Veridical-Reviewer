document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.star');

  stars.forEach((star, index) => {
    star.addEventListener('mouseover', function () {
      if (!this.classList.contains('clicked')) {
        this.classList.add('glow');
      }
    });

    star.addEventListener('mouseout', function () {
      if (!this.classList.contains('clicked')) {
        this.classList.remove('glow');
      }
    });

    star.addEventListener('click', function () {
      // Remove glow from all stars
      stars.forEach(s => {
        s.classList.remove('glow', 'clicked');
      });

      // Add glow to the clicked star and previous stars
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('glow', 'clicked');
      }
    });
  });
});
