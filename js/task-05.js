const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const valueInput = event.currentTarget.value;
  nameEl.textContent = valueInput;
});
