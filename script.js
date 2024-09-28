document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

let button = document.querySelector("#main_button");

button.addEventListener("mouseover", function () {
  button.textContent = "tel: 500-500-500";
});

button.addEventListener("mouseout", function () {
  button.textContent = "Order by phone";
});
