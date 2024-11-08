function button() {
    var menu = document.getElementById("side-menu");
    if (menu.style.height === "100%") {
        menu.style.height = "0";
    } else {
        menu.style.height = "100%";
    }
}
