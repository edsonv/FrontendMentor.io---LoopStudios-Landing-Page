const closeMenu = document.getElementById("close-menu");
const openMenu = document.getElementById("h-menu");
const menu = document.getElementById("nav-menu");

if (openMenu && closeMenu && menu) {
  closeMenu.addEventListener("click", () => {
    closeMenu.style.display = "none";
    menu.classList.remove("tablet-mobile-open");
  });

  openMenu.addEventListener("click", () => {
    closeMenu.style.display = "block";
    menu.classList.add("tablet-mobile-open");
  });
}
