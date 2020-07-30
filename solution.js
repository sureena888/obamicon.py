// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    HSB, background, color, colorMode, createCanvas, ellipse, height,
 *    mouseX, mouseY, noStroke, random, rect, round, sqrt, text, width
 *    line
 */

let backgroundColor, spherePosition, rectPosition;

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  
  rectPosition = new Position(100,140) //{x: 130, y: 140}
  
  spherePosition = new Position(100, 100);
  
  //rectPosition = new Position(130,140) //{x: 130, y: 140}
}

function draw() {
  background(backgroundColor);
  ellipse(spherePosition.x, spherePosition.y, 20, 20);
  rect(rectPosition.x, rectPosition.y, 20, 20);
  line(spherePosition.x, spherePosition.y, rectPosition.x, rectPosition.y)

  let distance1 = computeDistance(spherePosition, rectPosition);
  text(`The circle and rectangle are ${round(distance1)} units apart.`, 20, 20);

  let mousePosition = {
    x: mouseX,
    y: mouseY
  };
  let distance2 = computeDistance(spherePosition, mousePosition);
  let distanceDescription = computeCategoryOfDistance(
    spherePosition,
    mousePosition
  );
  text(
    `The circle and your mouse are ${round(
      distance2
    )} units apart; you're ${distanceDescription}.`,
    20,
    40
  );
}

function computeDistance(point1, point2) {
  let deltaX = point1.x - point2.x;
  let deltaY = point1.y - point2.y;
  let distance = sqrt(deltaX ** 2 + deltaY ** 2);
  return distance; // returns a number
}

function computeCategoryOfDistance(point1, point2) {
  let distance = computeDistance(point1, point2);
  
  if (distance > 246) {
    backgroundColor = "white";
  } else {
    backgroundColor = color(distance, 80, 100);
  }

  if (distance > 200) {
    return "cold";
  } else if (distance > 50) {
    return "warmer";
  } else {
    return "red hot";
  }
}

// This code runs every time the mouse is clicked
function mousePressed() {
  spherePosition.x = random(width);
  spherePosition.y = random(height);
}
