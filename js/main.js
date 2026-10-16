// Scale each [data-fit] element so its text spans the full width of its parent.
function fitText() {
  document.querySelectorAll("[data-fit]").forEach((el) => {
    const parent = el.parentElement;
    parent.style.fontSize = "100px";
    const width = el.getBoundingClientRect().width;
    if (width > 0) {
      parent.style.fontSize = (100 * parent.clientWidth) / width + "px";
    }
  });
}

fitText();
window.addEventListener("resize", fitText);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(fitText);
}

// Fade and slide content up as it scrolls into view; grouped items arrive one after another.
// Skipped when the visitor prefers reduced motion, and content stays visible if this script doesn't run.
function revealOnScroll() {
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const single = ".works__title, .statement__text, .block__label, .case__card, .case__main > .screen, .case__section > :not(.panels), .case__body, .case__next";
  const groups = ".notfound, .works__list, .tiles, .about__text, .panels, .case__gallery";
  const targets = [];

  document.querySelectorAll(single).forEach((el) => targets.push(el));
  const stagger = (items) => items.forEach((el, i) => {
    el.style.setProperty("--reveal-delay", Math.min(i, 5) * 80 + "ms");
    targets.push(el);
  });
  document.querySelectorAll(groups).forEach((group) => stagger([...group.children]));
  // Nav bar items one by one; the links are animated individually because their wrapper has no box on wider screens
  document.querySelectorAll(".hero__bar").forEach((bar) => stagger([...bar.querySelectorAll(":scope > :not(.hero__nav), .hero__nav > a")]));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10% 0px" });

  // The case study title card follows just after the nav bar starts; the homepage headline is always shown
  document.querySelectorAll(".case__card").forEach((el) => el.style.setProperty("--reveal-delay", "160ms"));

  targets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

revealOnScroll();
