// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Form submission
document.getElementById("subscribe-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you for subscribing!");
});
