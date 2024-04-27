let colorInput;
let bgColorInput;
let defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
  colorInput = document.querySelector("#colorInput");
  colorInput.value = defaultColor;
  colorInput.select();
}
