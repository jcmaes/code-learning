const button = document.querySelector("button");
const input = document.querySelector("input");
const value = localStorage.getItem(value);

if (value) {
  input.value = value;
}

button.addEventListener("click", () => {
  const value = input.value;
  localStorage.setItem("value", value);
});

window.addEventListener("storage", (event) => {
  console.log(event);
  input.value = event.newValue;
});
