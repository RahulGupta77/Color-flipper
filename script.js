const button = document.getElementById("button");

button.addEventListener("click", () => {
  const div = document.getElementById("div");
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  const buttonColor = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
  div.style.backgroundColor = color;
  button.textContent = color;
  button.style.backgroundColor = buttonColor;
  button.style.color = "white"; 
});
