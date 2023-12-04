function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open"); // Add `open` if not present and remove if present
  icon.classList.toggle("open");
}
