// Shared layout - header/footer injection

async function loadHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url);
  el.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#site-header", "/partials/header.html");
});
