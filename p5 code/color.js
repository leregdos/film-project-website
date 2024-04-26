let colorInput;
let bgColorInput;
let defaultColor = "#000000";
let defaultBG = '#d1d1d1'

window.addEventListener("load", startup, false);

function startup() {
  colorInput = document.querySelector("#colorInput");
  colorInput.value = defaultColor;
  colorInput.select();
  
  bgColorInput = document.querySelector("#bgColor");
  bgColorInput.value = defaultBG;
  bgColorInput.select();
}
