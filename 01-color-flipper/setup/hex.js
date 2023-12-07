const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.onclick = () => {
  let textContent = "#"
  for(let i = 0;i < 6;i++) {
    textContent += hex[getRandomNumber()];
  }
  color.textContent = textContent;
  document.body.style.backgroundColor = textContent;
}

const getRandomNumber = () => {
  return Math.floor(Math.random()*hex.length)
}

