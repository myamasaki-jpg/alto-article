document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progressBar");
  const floatingCta = document.getElementById("floatingCta");
  const year = document.getElementById("year");
  const revealItems = document.querySelectorAll(".js-reveal");
  const faqItems = document.querySelectorAll(".js-faq");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    }

    if (floatingCta) {
      if (scrollTop > 600) {
        floatingCta.classList.add("is-visible");
      } else {
        floatingCta.classList.remove("is-visible");
      }
    }
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });

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
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      faqItems.forEach((faq) => {
        faq.classList.remove("is-open");
        const faqButton = faq.querySelector(".faq-question");
        const faqAnswer = faq.querySelector(".faq-answer");

        if (faqButton) faqButton.setAttribute("aria-expanded", "false");
        if (faqAnswer) faqAnswer.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
