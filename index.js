document.getElementById("joinBtn").addEventListener("click", () => {
  alert("Terima kasih sudah tertarik bergabung dengan PMR!");
});

const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

const strukturElements = document.querySelectorAll(
    '.struktur-card, .branch-line'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('line-show');
      }
    });
  }, {
    threshold: 0.3
  });

  strukturElements.forEach(el => observer.observe(el));

