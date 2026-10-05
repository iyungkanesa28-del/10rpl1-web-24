const themeToggle = document.getElementById("themeToggle");

const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.body.classList.toggle("theme-dark", isDark);
    themeToggle.textContent = isDark ? "☀️ Siang" : "🌙 Malam";
    themeToggle.setAttribute("aria-label", isDark ? "Ganti ke tema siang" : "Ganti ke tema malam");
    localStorage.setItem("theme", theme);
};

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
    applyTheme(nextTheme);
});
