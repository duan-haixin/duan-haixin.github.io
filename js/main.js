document.addEventListener("DOMContentLoaded", () => {
  // ── Publication year filter ──────────────────────────────
  const btns  = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".pub-item");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      items.forEach(item => {
        item.style.display =
          (f === "all" || item.dataset.type === f) ? "" : "none";
      });
    });
  });

  // ── Active nav highlight on scroll ──────────────────────
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.style.color = "");
        const link = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );
        if (link) link.style.color = "#ffffff";
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => observer.observe(s));
});
