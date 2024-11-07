function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const menuToggle = document.querySelector(".menu-toggle");

  if (
    navMenu.classList.contains("show") &&
    !navMenu.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    navMenu.classList.remove("show");
  }
});
