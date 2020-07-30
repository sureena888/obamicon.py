// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    HSB, background, color, colorMode, createCanvas, ellipse, height,
 *    mouseX, mouseY, noStroke, random, rect, round, sqrt, text, width
 */

let backgroundColor, spherePosition, rectPosition

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  // This variable contains an object
  spherePosition = {
    "x": 100,
    "y": 100,
  }
}

function draw() {
  background(backgroundColor);
  ellipse(spherePosition.x, spherePosition.y, 20, 20);
  // rect(rectPosition.x, rectPosition.y, 20, 20);
  // line(spherePosition.x, spherePosition.y, rectPosition.x, rectPosition.y);
}

// This code runs every time the mouse is clicked
function mousePressed() {
  spherePosition.x = random(width);
  spherePosition.y = random(height);
}