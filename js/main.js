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
