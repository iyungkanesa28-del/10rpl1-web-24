const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.style.transform = "scale(0.97)";

        setTimeout(() => {
            item.style.transform = "";
        }, 150);
    });
});