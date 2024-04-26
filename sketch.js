let body;
let clearButton;
let saveButton;

function setup() {
  createCanvas(window.innerWidth - 600, window.innerHeight - 300);
  body = select("body");
  saveButton = select("#download");
  clearButton = select("#clearAll");
  pixelDensity(1);
  clearButton.mouseClicked(clearAll);
  saveButton.mouseClicked(saveToFile);
  cursor("cursor.cur");
  background(0, 0, 0, 0);
}

function draw() {
  stroke(colorInput.value);
  spray();
}

function clearAll() {
  clear();
  background(0, 0, 0, 0); // Reset to transparent background
}

function saveToFile() {
  saveCanvas("myCanvas", "png");
}

function spray() {
  if (
    mouseIsPressed &&
    mouseY > 0 &&
    mouseY < height &&
    mouseX > 0 &&
    mouseX < width
  ) {
    for (let i = 0; i < 100; i++) {
      let xc = constrain(mouseX, 0, width);
      let yc = constrain(mouseY, 0, height);
      let x = random(-10, 10);
      let y = random(-10, 10);
      if (dist(0, 0, x, y) < 10) {
        // Reduce radius for more centralized dots
        ellipse(xc + x, yc + y, 2, 2);
      }
    }
  }
}
