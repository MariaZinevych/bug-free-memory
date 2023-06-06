const inputEl = document.querySelector("#validation-input");
console.dir(inputEl);

inputEl.addEventListener("blur", onValidatorInput);

function onValidatorInput(event) {
  if (
    Number(event.currentTarget.value.length) === Number(inputEl.dataset.length)
  ) {
    inputEl.classList.add("valid");
  } else inputEl.classList.add("invalid");
}
