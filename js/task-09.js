function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.dir(getRandomHexColor);

const btnEl = document.querySelector(".change-color");
const valueColorEl = document.querySelector(".color");
console.log(valueColorEl);

btnEl.addEventListener("click", onCnahgecolor);

function onCnahgecolor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  valueColorEl.textContent = getRandomHexColor();
}
