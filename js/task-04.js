const valueBtn = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

decrementBtn.addEventListener("click", () => {
  counterValue.decrement();
  valueBtn.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", () => {
  counterValue.increment();
  valueBtn.textContent = counterValue.value;
});
