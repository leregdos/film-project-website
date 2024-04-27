let body;
let clearButton;
let saveButton;
let bgImage;
let hexColor;
let opacity;

function preload() {
  bgImage = loadImage("graffitti.jpg"); // Ensure the image is loaded before setup runs
}

function setup() {
  createCanvas(bgImage.width / 2, bgImage.height / 2);
  body = select("body");
  saveButton = select("#download");
  clearButton = select("#clearAll");
  pixelDensity(1);
  clearButton.mouseClicked(clearAll);
  saveButton.mouseClicked(saveToFile);
  cursor("cursor.cur");
  background(bgImage);
}

function draw() {
  hexColor = color(colorInput.value); // Converts hex to p5 Color object
  opacity = opacityInput.value; // Get the opacity value
  density = densityInput.value; // Get the density value
  let r = red(hexColor); // Get the Red component
  let g = green(hexColor); // Get the Green component
  let b = blue(hexColor); // Get the Blue component
  stroke(`rgba(${r}, ${g}, ${b}, ${opacity})`); // Use RGBA for stroke
  spray();
}

function clearAll() {
  clear();
  background(bgImage);
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
    for (let i = 0; i < density; i++) {
      let angle = random(TWO_PI); // Random angle for dispersion
      let spread = random(15); // Max spread from the cursor position
      let x = mouseX + spread * cos(angle);
      let y = mouseY + spread * sin(angle);
      let dropletSize = random(0.5, 1.2); // Smaller droplets for a finer mist

      // Extract RGB components from the color input directly
      let r = red(hexColor);
      let g = green(hexColor);
      let b = blue(hexColor);
      fill(`rgba(${r}, ${g}, ${b}, ${opacity})`);
      noStroke(); // No outline for droplets
      ellipse(x, y, dropletSize, dropletSize);
    }
  }
}
