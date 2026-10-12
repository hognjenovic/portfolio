// Timezone shown in the footer clock. Any IANA name works, e.g. "Europe/London".
const TIME_ZONE = "Europe/Belgrade";

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

// Grid / List toggle for Selected Works.
const items = document.querySelector(".works .works__items");
const toggles = document.querySelectorAll(".works .view-toggle button");

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    items.dataset.view = button.dataset.view;
    toggles.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
  });
});

// Footer clock and year.
const clock = document.querySelector("[data-clock]");

function tick() {
  clock.textContent = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: TIME_ZONE,
    timeZoneName: "short",
  }).format(new Date());
}

if (clock) {
  tick();
  setInterval(tick, 30000);
}

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
