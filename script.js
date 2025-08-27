// Load last color from localStorage, default to white
const circle = document.getElementById("circle");
const lastColor = localStorage.getItem("circleColor") || "white";
circle.style.backgroundColor = lastColor;

// Function to change color
function changeColor(color) {
  circle.style.backgroundColor = color;
  localStorage.setItem("circleColor", color); // Save color to remember later
}