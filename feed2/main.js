// スクロールでCTA強調
window.addEventListener("scroll", () => {
  const cta = document.querySelector(".cta");
  if (window.scrollY > 500) {
    cta.style.transform = "scale(1.05)";
  } else {
    cta.style.transform = "scale(1)";
  }
});
