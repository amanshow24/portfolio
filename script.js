// Simple scroll-triggered fade-in for sections
const fadeEls = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  fadeEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything
  fadeEls.forEach((el) => el.classList.add("is-visible"));
}