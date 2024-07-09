// Import p5 module
import p5 from "p5";

// Function to create a p5 sketch and attach it to the 'scriptHolder' div
// export function createP5Sketch() {
var sketch = function (p) {
  let element = document.getElementById("existingCanvas");
  let w;
  let h;
  p.windowResized = function () {
    element = document.getElementById("existingCanvas");
    w = element.offsetWidth;
    h = element.offsetHeight;
    p.resizeCanvas(w, h);
  };
  p.setup = function () {
    element = document.getElementById("existingCanvas");
    w = element.offsetWidth;
    h = element.offsetHeight;
    let canvas = p.createCanvas(w, h);
  };

  p.draw = function () {
    console.log("p5 draw");
    p.background("#fff");
    p.noFill();
    // p.strokeWeight(3);
    // p.stroke('#000');
    // p.rect(0,0,p.width,p.height)
    p.fill("#000");
    p.noStroke();
    // Draw an ellipse at the center of the canvas
    p.push();
    p.translate(p.tan(p.frameCount * 0.025) * 100, 0.0);
    p.ellipse(p.width / 2, p.height / 2, 100, 100);
    p.pop();
  };
};
new p5(sketch, existingCanvas);
// }
