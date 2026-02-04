document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  toggle.addEventListener("click", () => {
    root.classList.toggle("dark");
    toggle.textContent = root.classList.contains("dark") ? "☀️" : "🌙";
  });
});
