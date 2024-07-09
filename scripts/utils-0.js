// import { createP5Sketch } from './sketch.js';

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".nav-menu").style.display =
      document.querySelector(".nav-menu").style.display === "none"
        ? "block"
        : "none";
  });

export function adjustFontSize() {
  const container = document.getElementById("splash");
  const span = document.getElementById("mySpan");
  let fontSize = 10;

  // Get the computed style of the container to account for padding
  const style = window.getComputedStyle(container);
  const paddingLeft = parseFloat(style.paddingLeft);
  const paddingRight = parseFloat(style.paddingRight);

  // Calculate the available width for the text
  const availableWidth = container.clientWidth - paddingLeft - paddingRight;

  if (span) {
    span.style.fontSize = `${fontSize}px`;

    while (span.scrollWidth < availableWidth) {
      fontSize++;
      span.style.fontSize = `${fontSize}px`;
    }

    // Decrement once if it exceeds the available width
    if (span.scrollWidth > availableWidth) {
      fontSize--;
      span.style.fontSize = `${fontSize}px`;
    }
  }
}

window.addEventListener("resize", adjustFontSize);
window.addEventListener("DOMContentLoaded", adjustFontSize);

let bodyMargin;

// Listen for DOM content loaded to ensure elements are available for manipulation
document.addEventListener("DOMContentLoaded", function () {
  // Get the computed styles for the body to extract the margin
  const bodyStyle = getComputedStyle(document.body);
  // Extract and convert the body margin to a numeric value, assuming 'px' units
  bodyMargin = parseInt(bodyStyle.margin.replace("px", ""));

  // createP5Sketch();
});
