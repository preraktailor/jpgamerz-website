const colors = ["#FF5733", "#FFC300", "#36A2EB", "#4CAF50", "#FF4081"];
const container = document.querySelector(".container");

function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  container.style.backgroundColor = colors[randomIndex];
}