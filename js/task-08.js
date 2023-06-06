const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

const valuesFile = {};

function onFormSubmit(event) {
  event.preventDefault();

  const mailEl = event.currentTarget.elements.email;
  const passwordEl = event.currentTarget.elements.password;

  if (mailEl.value === "" || passwordEl.value === "") {
    alert("Всі поля повинні бути заповнені");
  }
  (valuesFile.mail = mailEl.value), (valuesFile.password = passwordEl.value);

  console.log(valuesFile);
  event.currentTarget.reset();
}
