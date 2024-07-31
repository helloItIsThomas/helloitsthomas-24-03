document.addEventListener("DOMContentLoaded", function () {
  class Knob {
    constructor(knobElement, callback) {
      this.knobElement = knobElement;
      this.callback = callback;
      this._angle = 0; // Initial angle
      // Initialize the knob
    }

    angle(value) {
      if (value !== undefined) {
        this._angle = value;
        this.callback(this);
      }
      return this._angle;
    }
  }
});

let projectContent;

window.addEventListener("load", () => {
  projectContent = document.querySelector("#projectContent");
  topFunction();
});

window.addEventListener("resize", () => {
  // resizeTextToFit();
  // instantClipReset();
  if (globalState.isHome) {
    instantClipReset();
  } else instantClipSet();
  console.log("resize");
  // resizeClip();
});

let scrollPos = 0;
let lastRoundedIndex = -1; // Keep track of the last rounded index
const thumbnailImg = document.querySelector("#thumbnail img");

let isScrolling = false; // Flag to track the scrolling state
const sensitivity = 0.05;

window.addEventListener("wheel", (event) => {
  if (!globalState.isHome) {
    return;
  }
  // sandbox.setUniform("u_tex", thisImg.src);

  const delta = event.deltaY < 0 ? 1 : -1;
  scrollPos += delta * sensitivity;

  let roundedIndex = Math.abs(Math.round(scrollPos) % images.length); // Ensure positive index

  if (roundedIndex !== lastRoundedIndex) {
    lastRoundedIndex = roundedIndex;
    imageIndex = roundedIndex;
    updateThumbnail();
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      // console.log("Updated Image to index: ", imageIndex);
    }, 150);
  }
});

// lets do a lookup table.
// the key is the imageIndex,
// and the value is a list of values, one for each knob.

const knobValues = {
  0: [1, 10, 20, 30],
  1: [50, 60, 70, 80],
  2: [100, 110, 120, 130],
};

function updateThumbnail() {
  thumbnailImg.src = images[imageIndex];
  updateKnobs(knobValues[imageIndex]);
}
