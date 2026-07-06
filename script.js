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

// Visit counter
// Uses countapi.mileshilliard.com, a free maintained counter service
// (the original countapi.xyz was discontinued). Every page load "hits"
// the counter and gets back the running total. No backend or signup
// required. Keys are global/public here, so KEY must be unique to this
// site to avoid colliding with someone else's counter.
(function initVisitCounter() {
  const countEl = document.getElementById("visit-count");
  if (!countEl) return;

  const KEY = "amanshow-me-portfolio-visits-a1k2s3";

  fetch(`https://countapi.mileshilliard.com/api/v1/hit/${KEY}`)
    .then((res) => {
      if (!res.ok) throw new Error("Counter request failed");
      return res.json();
    })
    .then((data) => {
      countEl.textContent = Number(data.value).toLocaleString();
    })
    .catch(() => {
      // Fail quietly — don't let a broken counter service break the page
      countEl.parentElement.style.display = "none";
    });
})();