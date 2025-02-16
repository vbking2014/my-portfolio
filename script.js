document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.position = "fixed";
            navbar.style.top = "0";
            navbar.style.width = "100%";
            navbar.style.background = "rgba(0, 0, 0, 0.9)";
            navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.position = "relative";
            navbar.style.background = "rgba(0, 0, 0, 0.8)";
            navbar.style.boxShadow = "none";
        }
    });
});
