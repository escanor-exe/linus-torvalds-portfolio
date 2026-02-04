document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const html = document.documentElement;

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    toggle.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
  });
});
